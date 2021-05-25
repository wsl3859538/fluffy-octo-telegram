<template>
  <div class="login_container">
    <div class="signIn_container">
      <div class="signIn_content">
        <div class="sign-tabs">
          <div
            class="tab"
            :class="{ active: isTab == 1 }"
            @click="tabChange(1)"
          >
            免密码登录
          </div>
          <div
            class="tab"
            :class="{ active: isTab == 2 }"
            @click="tabChange(2)"
          >
            密码登录
          </div>
        </div>

        <!-- 免密码登录/注册 -->

        <el-form
          :model="dataFormReg"
          :rules="dataRuleReg"
          ref="dataFormReg"
          @keyup.enter.native="dataFormSubmit()"
          status-icon
          size="large"
          class="sign_form"
          v-if="isTab == 1"
        >
          <el-form-item prop="mobile">
            <el-input
              v-model="dataFormReg.mobile"
              placeholder="手机号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="verCode">
            <div class="ver_block">
              <el-input
                placeholder="请输入6位验证码"
                v-model="dataFormReg.verCode"
              >
              </el-input>
              <button class="button" @click="getVerCode()">发送验证码</button>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button
              class="login-btn-submit"
              type="primary"
              @click="dataFormSubmit()"
              >注册/登录</el-button
            >
          </el-form-item>
        </el-form>

        <!-- 密码登录 -->

        <el-form
          :model="dataFormSign"
          :rules="dataRuleSign"
          ref="dataFormSign"
          @keyup.enter.native="dataFormSubmit()"
          status-icon
          size="large"
          class="sign_form"
          v-if="isTab == 2"
        >
          <el-form-item prop="userName">
            <el-input
              v-model="dataFormSign.userName"
              placeholder="手机号或邮箱"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="dataFormSign.password"
              show-password
            ></el-input>
          </el-form-item>

          <!-- 免密码登录 -->

          <el-form-item>
            <el-button
              class="login-btn-submit"
              type="primary"
              @click="dataFormSubmit()"
              >登录</el-button
            >
          </el-form-item>
        </el-form>

        <div class="tips">
          未注册手机验证后自动登录，注册即代表同意《注册协议》《隐私保护协议》
        </div>
      </div>
    </div>

    <div class="footer_container">
      <div class="links">
        <span>xx专栏</span>
        <a>圆桌</a>
        <a>发现</a>
        <a>移动应用</a>
        <a>联系我们</a>
        <a>来知乎工作</a>
        <a>注册机构号</a>
        <a>Investor Relations</a>
      </div>
      <div class="rights">
        <span>© 2021 xx</span><a>京 ICP 证 110745 号</a
        ><a>京 ICP 备 13052560 号 - 1</a>
        <a
          ><img
            src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png"
          />京公网安备 9999999 号</a
        >
        <a>出版物经营许可证</a>
        <span>互联网药品信息服务资格证书（京）- 非经营性 - 2017 - 0067</span>
      </div>
      <div class="reports">
        <a>侵权举报</a>
        <a>网上有害信息举报专区</a>
        <a>儿童色情信息举报专区</a>
        <span>违法和不良信息举报：010-82716601</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (this.dataFormReg.mobile !== "") {
          const phoneReg = /^1[3|4|5|7|8|9][0-9]{9}$/;
          if (phoneReg.test(value)) {
            // this.$refs.ruleForm.validateField("checkPass");
            callback();
          } else {
            callback(new Error("电话号码格式/长度不正确"));
          }
        }
      }
    };

    return {
      dataFormReg: {
        mobile: "",
        verCode: "",
      },

      dataFormSign: {
        userName: "",
        password: "",
      },

      dataRuleReg: {
        mobile: [{ validator: validateMobile, trigger: "blur" }],

        verCode: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
        ],
      },
      dataRuleSign: {
        userName: [
          { required: true, message: "帐号不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },

      isTab: "1",
      dataListLoading: false,
    };
  },
  created() {},
  methods: {
    // 提交表单
    dataFormSubmit() {
      this.dataListLoading = true;

      if (this.isTab == 1) {
        this.$refs["dataFormReg"].validate((valid) => {

          if (valid) {
            this.$http({
              url: this.$http.adornUrl("/app/user/register"),
              method: "post",
              data: this.$http.adornData({
                mobile: this.dataFormReg.mobile,
                vercode: this.dataFormReg.verCode,
              }),
            })
              .then(({ data }) => {
                console.log("data", data);

                if (data && data.code === 200) {
                  this.$cookie.set("token", data.token);

                   this.$cookie.set("userInfo", JSON.stringify(data.user));

                  if (data.token) {
                    this.$router.replace({ name: "home" });
                  } else {
                    this.$message({
                      message: "注册成功,即将为您跳转页面",
                      type: "success",
                      duration: 2000,
                      onClose: () => {
                        this.$router.replace({ name: "home" });
                      },
                    });
                  }

                  this.dataListLoading = true;
                } else {
                  this.$message.error(data.msg);
                  this.dataListLoading = false;
                }
              })
              .catch((data) => {
                console.log("data", data);
                this.$message.error("登录失败");
              });
          } else {
            this.dataListLoading = false;
          }
        });
      } else {
        this.$refs["dataFormSign"].validate((valid) => {
          console.log("valid", "sign");

          if (valid) {
            this.$http({
              url: this.$http.adornUrl("/app/user/sign"),
              method: "post",
              data: this.$http.adornData({
                username: this.dataFormSign.userName,
                password: this.dataFormSign.password,
              }),
            }).then(({ data }) => {
              if (data && data.code === 200) {
                this.$cookie.set("token", data.token);

                this.$router.replace({ name: "home" });
              } else {
                this.$message.error(data.msg);
                this.dataListLoading = false;
              }
            });
          } else {
            this.dataListLoading = false;
          }
        });
      }
    },

    // 获取验证码
    async getVerCode() {
      let errMsg = "";
      await this.$refs["dataFormReg"].validateField("mobile", (errMsg) => {
        errMsg = errMsg;
      });

      if (errMsg) {
        return;
      }

      this.$http({
        url: this.$http.adornUrl("/app/user/sendVercode"),
        method: "post",
        data: this.$http.adornData({
          mobile: this.dataFormReg.mobile,
        }),
      }).then(({ data }) => {
        console.log("data", data);
        if (data && data.code === 200) {
          this.$message({
            message: "验证码发送成功",
            type: "success",
            duration: 1500,
            onClose: () => {},
          });
        } else {
          this.$message.error(data.msg);
          this.dataListLoading = false;
        }
      });
    },

    // tab切换
    tabChange(index) {
      this.isTab = index;
      console.log(this.isTab);
      if (this.isTab == 1) {
        this.$refs["dataFormSign"].resetFields();
      } else {
        this.$refs["dataFormReg"].resetFields();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login_container {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
  .signIn_container {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 2px;
    min-height: 688px;
    height: calc(100% - 42px);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    .signIn_content {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      padding: 0 24px 84px;
      background-color: #ffffff;
      box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
      border-radius: 2px;
      background-color: #ffffff;
      width: 400px;
      overflow: hidden;
      text-align: center;
      position: relative;
      .sign-tabs {
        text-align: left;
        .tab {
          font-size: 16px;
          line-height: 60px;
          height: 60px;
          margin-right: 24px;
          cursor: pointer;
          display: inline-block;
        }
        .active {
          position: relative;
          color: #121212;
          font-weight: 600;
          &::after {
            display: block;
            position: absolute;
            bottom: 0;
            content: "";
            width: 100%;
            height: 3px;
            background-color: #06f;
          }
        }
      }
      .sign_form {
        margin-top: 24px;
        .el-input--medium .el-input__inner {
          padding: 0;
          border: none;
          height: 48px;
          line-height: 48px;
        }
        .login-btn-submit {
          width: 100%;
        }
      }
      .tips {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 24px;
        color: grey;
        font-size: 14px;
        text-align: justify;
      }
    }

    .ver_block {
      display: flex;
      position: relative;
      align-items: center;
      .button {
        position: absolute;
        right: 10px;
        color: #175199;
        border: none;
        background: transparent;
        text-align: right;
        cursor: pointer;
        padding: 0 10px;
      }
      .el-input {
        width: calc(100% - 130px);
      }
    }
  }

  .footer_container {
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 2px #999;
    padding-bottom: 20px;
    a {
      margin: 0 5px;
      text-shadow: 0 1px 2px #999;
    }
  }
}
</style>
