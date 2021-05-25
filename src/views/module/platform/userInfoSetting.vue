<template>
  <div>
    <!-- ask -->
    <div>
      <el-dialog
        title="欢迎登陆xx"
        :visible.sync="visible"
        :close-on-click-modal="false"
      >
        <div class="ask_container">
          <el-form
            :model="dataForm"
            :rules="dataRule"
            ref="dataForm"
            @keyup.enter.native="dataFormSubmit()"
            status-icon
            size="large"
            class="sign_form"
          >
            <el-form-item prop="nickname" label="昵称" label-width="120px">
              <el-input
                v-model="dataForm.nickname"
                placeholder="给自己取个有个性的昵称吧"
              ></el-input>
            </el-form-item>

            <el-form-item  label="一句话介绍" label-width="120px">
              <el-input
                placeholder="用一句话来描述一下自己的简介"
                v-model="dataForm.intro"
              ></el-input>
            </el-form-item>

            <el-form-item  label="头像上传" label-width="120px">
              <div class="UserAvatarEditor ProfileHeader-avatar">
                <div class="UserAvatar" style="/* display: none; */">
                  <img
                    class="Avatar Avatar--large UserAvatar-inner"
                    width="160"
                    height="160"
                    :src="dataForm.avatar"
                    srcset="https://pic4.zhimg.com/da8e974dc_xll.jpg 2x"
                  />
                </div>
                <label class="UploadPicture-wrapper"
                  ><input
                    type="file"
                    accept="image/png,image/jpeg"
                    class="UploadPicture-input"
                    @change="previewPic($event)"
                  />
                  <div class="Mask UserAvatarEditor-mask" v-if="!haveAvatar">
                    <div
                      class="Mask-mask Mask-mask--black UserAvatarEditor-maskInner"
                    ></div>
                    <div class="Mask-content">
                      <svg
                        class="Zi Zi--Camera UserAvatarEditor-cameraIcon"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="36"
                        height="36"
                      >
                        <path
                          d="M20.094 6S22 6 22 8v10.017S22 20 19 20H4.036S2 20 2 18V7.967S2 6 4 6h3s1-2 2-2h6c1 0 2 2 2 2h3.094zM12 16a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0 1.5a5 5 0 1 0-.001-10.001A5 5 0 0 0 12 17.5zm7.5-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <div class="UserAvatarEditor-maskInnerText">
                        修改我的头像
                      </div>
                    </div>
                  </div></label
                >
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div slot="footer" class="ask_footer">
          <div>
            <el-button @click="visible = false">取 消</el-button>
            <el-button type="primary" @click="dataFormSubmit()"
              >确 定</el-button
            >
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      dataForm: {
        nickname: "",
        intro: "",
        avatar: "https://pic4.zhimg.com/da8e974dc_xl.jpg",
      },
      haveAvatar: false,

      dataRule: {
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
        ],
        intro: [{ required: true, message: "简介不能为空", trigger: "blur" }],
      },
    };
  },
  methods: {
    init() {
      this.visible = true;
    },

    dataFormSubmit() {
      this.$refs["dataForm"].validate((valid) => {
        if (valid) {
          this.$http({
            url: this.$http.adornUrl("/app/user/updateUserInfo"),
            method: "post",
            data: this.$http.adornData({
              userName: this.dataForm.nickname,
              avatar: this.dataForm.avatar,
              tags: this.dataForm.intro,
            }),
          })
            .then(({ data }) => {
              console.log("data", data);

              if (data && data.code === 200) {
                this.visible = false;

                this.$message({
                  message: "保存成功",
                  type: "success",
                  duration: 1000,
                  onClose: () => {
                    this.$cookie.set("userInfo", JSON.stringify(data.user));
                    // this.$emit("refreshDataList");
                  },
                });
              } else {
                this.$message.error(data.msg);
                this.dataListLoading = false;
              }
            })
            .catch((data) => {
              console.log("data", data);
              this.$message.error("请求失败");
            });
        } else {
          this.dataListLoading = false;
        }
      });
    },

    previewPic(event) {
      let file = event.target.files[0];
      if (!file) return;

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (res) => {
        this.dataForm.avatar = res.target.result;
      };

      var formData = new FormData();
      formData.append("file", file);

      this.$http({
        url: this.$http.adornUrl("/app/upload"),
        method: "post",
        data: formData,
      }).then(({ data }) => {
        if (data && data.code === 200) {
          this.dataForm.avatar = data.url;
          this.haveAvatar = true;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
  },
};
</script>

<style lang="scss" scope>
.UserAvatarEditor {
  cursor: pointer;
  width: 160px;
  height: 160px;
  position: relative;
  .UserAvatar {
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    background-color: #fff;
    border: 4px solid #fff;
    border-radius: 8px;
    .UserAvatar-inner {
      vertical-align: top;
      position: absolute;
      top: 0;
      left: 0;
      .Avatar--large {
        border-radius: 4px;
      }
    }
  }

  .UploadPicture-wrapper {
    cursor: pointer;
    .UploadPicture-input {
      display: none;
    }
    .Mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      transition: opacity 0.2s ease-in;
    }
    .Mask-mask {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      box-sizing: border-box;
      background: #121212;
      z-index: 4;
      border: 4px solid #fff;
      border-radius: 8px;
    }
    .Mask-content {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 5;
      color: #fff;
      text-align: center;
      transform: translate(-50%, -50%);
      .UserAvatarEditor-cameraIcon {
        margin-bottom: 14px;
        fill: #fff;
      }
      .UserAvatarEditor-maskInnerText {
        white-space: nowrap;
      }
    }
  }
}
</style>