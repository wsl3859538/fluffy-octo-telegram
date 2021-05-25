<template>
  <div class="home_container">
    <div class="home_content">
      <div class="home_mainColumn">
        <el-tabs v-model="tabIndex" @tab-click="tabChange()">
          <el-tab-pane label="推荐" name="recommend">
            <div class="askItem" v-for="item in askList" :key="item.id">
              <div class="userInfo" v-if="item.anonymity != 1">
                <img class="avatar" :src="item.avatar" />
                <span class="username">{{ item.userName }} ，</span>
                <span class="tag">{{ item.tags }}</span>
              </div>
              <p class="title">{{ item.title }}</p>

              <div class="rich_content">
                <div class="rich_content_inner">
                  <span v-if="!item.open" class="collapsedText">{{
                    item.collapsedText
                  }}</span>
                  <span v-else class="allText">{{ item.all_text }}</span>

                  <button
                    v-if="!item.open"
                    type="button"
                    class="contentItem_more"
                    @click="openAllText(item)"
                  >
                    阅读全文<span
                      style="display: inline-flex; align-items: center"
                      >​<svg
                        class="Zi Zi--ArrowDown ContentItem-arrowIcon"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                          fill-rule="evenodd"
                        ></path></svg
                    ></span>
                  </button>
                </div>
                <div class="rich_content_actions">
                  <span>
                    <button
                      type="button"
                      class="voteButton VoteButton--up"
                      :class="{ voteButtonActive: item.voteTyps == 'up' }"
                      @click="voteEvent(item, 'vote')"
                    >
                      <span style="display: inline-flex; align-items: center"
                        >​<svg
                          class="Zi Zi--TriangleUp VoteButton-TriangleUp"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span v-if="item.voteTyps == 'up'">已赞同</span>
                      <span v-else>赞同</span>
                      <span> {{ item.votes }}</span>
                    </button>

                    <button
                      aria-label="反对"
                      type="button"
                      class="Button voteButton VoteButton--down"
                      @click="voteEvent(item, 'down')"
                    >
                      <span style="display: inline-flex; align-items: center"
                        >​<svg
                          class="Zi Zi--TriangleDown"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
                            fill-rule="evenodd"
                          ></path></svg
                      ></span></button
                  ></span>

                  <button type="button" class="commentButton">
                    <span style="display: inline-flex; align-items: center"
                      >​<svg
                        class="Zi Zi--Comment Button-zi"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="1.2em"
                        height="1.2em"
                      >
                        <path
                          d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                          fill-rule="evenodd"
                        ></path></svg></span
                    >{{ item.comments }} 条评论
                  </button>

                  <div class="community">
                    <span class="item">
                      <i class="el-icon-s-promotion svgIcon"></i>
                      分享
                    </span>
                    <span class="item">
                      <i class="el-icon-star-on svgIcon"></i>
                      点赞
                    </span>
                    <span class="item">
                      <i class="el-icon-s-opportunity svgIcon"></i>
                      {{ item.like == 0 ? "喜欢" : "取消喜欢" }}
                    </span>
                  </div>
                  <button
                    v-if="item.open"
                    type="button"
                    class="contentItem_more"
                    @click="openAllText(item)"
                  >
                    收起<span style="display: inline-flex; align-items: center"
                      >​<svg
                        class="Zi Zi--ArrowDown ContentItem-arrowIcon is-active"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                          fill-rule="evenodd"
                        ></path></svg
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="关注" name="follow">
            <div class="askItem" v-for="item in askList" :key="item.id">
              <div class="userInfo" v-if="item.anonymity != 1">
                <img class="avatar" :src="item.avatar" />
                <span class="username">{{ item.userName }} ，</span>
                <span class="tag">{{ item.tags }}</span>
              </div>
              <p class="title">{{ item.title }}</p>

              <div class="rich_content">
                <div class="rich_content_inner">
                  <span v-if="!item.open" class="collapsedText">{{
                    item.collapsedText
                  }}</span>
                  <span v-else class="allText">{{ item.all_text }}</span>

                  <button
                    v-if="!item.open"
                    type="button"
                    class="contentItem_more"
                    @click="openAllText(item)"
                  >
                    阅读全文<span
                      style="display: inline-flex; align-items: center"
                      >​<svg
                        class="Zi Zi--ArrowDown ContentItem-arrowIcon"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                          fill-rule="evenodd"
                        ></path></svg
                    ></span>
                  </button>
                </div>
                <div class="rich_content_actions">
                  <span>
                    <button
                      type="button"
                      class="voteButton VoteButton--up"
                      :class="{ voteButtonActive: item.voteTyps == 'up' }"
                      @click="voteEvent(item, 'vote')"
                    >
                      <span style="display: inline-flex; align-items: center"
                        >​<svg
                          class="Zi Zi--TriangleUp VoteButton-TriangleUp"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span v-if="item.voteTyps == 'up'">已赞同</span>
                      <span v-else>赞同</span>
                      <span> {{ item.votes }}</span>
                    </button>

                    <button
                      aria-label="反对"
                      type="button"
                      class="Button voteButton VoteButton--down"
                      @click="voteEvent(item, 'down')"
                    >
                      <span style="display: inline-flex; align-items: center"
                        >​<svg
                          class="Zi Zi--TriangleDown"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
                            fill-rule="evenodd"
                          ></path></svg
                      ></span></button
                  ></span>

                  <button type="button" class="commentButton">
                    <span style="display: inline-flex; align-items: center"
                      >​<svg
                        class="Zi Zi--Comment Button-zi"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="1.2em"
                        height="1.2em"
                      >
                        <path
                          d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                          fill-rule="evenodd"
                        ></path></svg></span
                    >{{ item.comments }} 条评论
                  </button>

                  <div class="community">
                    <span class="item">
                      <i class="el-icon-s-promotion svgIcon"></i>
                      分享
                    </span>
                    <span class="item">
                      <i class="el-icon-star-on svgIcon"></i>
                      点赞
                    </span>
                    <span class="item">
                      <i class="el-icon-s-opportunity svgIcon"></i>
                      {{ item.like == 0 ? "喜欢" : "取消喜欢" }}
                    </span>
                  </div>
                  <button
                    v-if="item.open"
                    type="button"
                    class="contentItem_more"
                    @click="openAllText(item)"
                  >
                    收起<span style="display: inline-flex; align-items: center"
                      >​<svg
                        class="Zi Zi--ArrowDown ContentItem-arrowIcon is-active"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                          fill-rule="evenodd"
                        ></path></svg
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热榜" name="hot">
            <div class="askItem" v-for="item in askList" :key="item.id">
              <div class="userInfo" v-if="item.anonymity != 1">
                <img class="avatar" :src="item.avatar" />
                <span class="username">{{ item.userName }} ，</span>
                <span class="tag">{{ item.tags }}</span>
              </div>
              <p class="title">{{ item.title }}</p>

              <div class="rich_content">
                <div class="rich_content_inner">
                  <span v-if="!item.open" class="collapsedText">{{
                    item.collapsedText
                  }}</span>
                  <span v-else class="allText">{{ item.all_text }}</span>

                  <button
                    v-if="!item.open"
                    type="button"
                    class="contentItem_more"
                    @click="openAllText(item)"
                  >
                    阅读全文<span
                      style="display: inline-flex; align-items: center"
                      >​<svg
                        class="Zi Zi--ArrowDown ContentItem-arrowIcon"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                          fill-rule="evenodd"
                        ></path></svg
                    ></span>
                  </button>
                </div>
                <div class="rich_content_actions">
                  <span>
                    <button
                      type="button"
                      class="voteButton VoteButton--up"
                      :class="{ voteButtonActive: item.voteTyps == 'up' }"
                      @click="voteEvent(item, 'vote')"
                    >
                      <span style="display: inline-flex; align-items: center"
                        >​<svg
                          class="Zi Zi--TriangleUp VoteButton-TriangleUp"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span v-if="item.voteTyps == 'up'">已赞同</span>
                      <span v-else>赞同</span>
                      <span> {{ item.votes }}</span>
                    </button>

                    <button
                      aria-label="反对"
                      type="button"
                      class="Button voteButton VoteButton--down"
                      @click="voteEvent(item, 'down')"
                    >
                      <span style="display: inline-flex; align-items: center"
                        >​<svg
                          class="Zi Zi--TriangleDown"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
                            fill-rule="evenodd"
                          ></path></svg
                      ></span></button
                  ></span>

                  <button type="button" class="commentButton">
                    <span style="display: inline-flex; align-items: center"
                      >​<svg
                        class="Zi Zi--Comment Button-zi"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="1.2em"
                        height="1.2em"
                      >
                        <path
                          d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                          fill-rule="evenodd"
                        ></path></svg></span
                    >{{ item.comments }} 条评论
                  </button>

                  <div class="community">
                    <span class="item">
                      <i class="el-icon-s-promotion svgIcon"></i>
                      分享
                    </span>
                    <span class="item">
                      <i class="el-icon-star-on svgIcon"></i>
                      点赞
                    </span>
                    <span class="item">
                      <i class="el-icon-s-opportunity svgIcon"></i>
                      {{ item.like == 0 ? "喜欢" : "取消喜欢" }}
                    </span>
                  </div>
                  <button
                    v-if="item.open"
                    type="button"
                    class="contentItem_more"
                    @click="openAllText(item)"
                  >
                    收起<span style="display: inline-flex; align-items: center"
                      >​<svg
                        class="Zi Zi--ArrowDown ContentItem-arrowIcon is-active"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                          fill-rule="evenodd"
                        ></path></svg
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="home_sideBar"></div>
    </div>

    <!-- ask -->
    <div>
      <el-dialog
        title="提问"
        :visible.sync="askModal"
        :close-on-click-modal="false"
      >
        <div class="ask_container">
          <div class="ask_header">
            <img
              class="img"
              :src="
                userInfo && userInfo.avatar
                  ? userInfo.avatar
                  : 'https://pic4.zhimg.com/da8e974dc_is.jpg'
              "
              alt=""
            />
            <el-input
              type="textarea"
              :rows="2"
              placeholder="写下你的问题,准确地描述更容易得到解答"
              v-model="askParams.title"
              :maxlength="200"
              resize="none"
            >
            </el-input>
          </div>

          <div v-if="askParams.title.length > 0">
            <Editor
              ref="editor"
              :defaultText="defaultText"
              :rich-text.sync="richText"
            ></Editor>
          </div>
        </div>
        <div slot="footer" class="ask_footer">
          <el-checkbox v-model="askParams.anonymity">匿名提问</el-checkbox>
          <div>
            <el-button @click="askModal = false">取 消</el-button>
            <el-button type="primary" @click="submitAsk()">确 定</el-button>
          </div>
        </div>
      </el-dialog>
    </div>

    <AddUserInfo v-if="addVisible" ref="addOrUpdate"></AddUserInfo>
  </div>
</template>

<script>
import Editor from "../../../components/editor";
import Bus from "../../../../bus/index.js";

import AddUserInfo from "./userInfoSetting";

export default {
  data() {
    return {
      tabIndex: "recommend",
      richText: "",
      defaultText: "",
      fileList: [],
      namee: "",
      namee2: "",
      askModal: false,
      askParams: {
        content: "",
        anonymity: false,
        title: "",
      },
      keyword:"",
      pageIndex: 1,
      pageSize: 10,
      askList: [],
      addVisible: false,
    };
  },

  watch: {
    richText(newStr) {
      console.log(newStr);
      this.askParams.content = newStr;
    },
  },

  components: { Editor, AddUserInfo },

  computed: {
    documentClientHeight: {
      get() {
        return this.$store.state.common.documentClientHeight;
      },
      set(val) {
        this.$store.commit("common/updateDocumentClientHeight", val);
      },
    },
    userInfo: {
      get() {
        return JSON.parse(this.$cookie.get("userInfo"));
      },
      set(val) {},
    },
  },
  methods: {
    // 测试form提交

    // submitForm(event) {
    // 			let formData = new FormData();
    // 			formData.append('categoryName', this.namee);
    // 			formData.append('description', this.descrip);
    // 			var url ="proxyApi/app/upload";
    // 			this.$http.post(url, formData).then(function (res) {
    // 			  if (res.status === 200) {

    // 			  }
    // 			})
    // },

    getAskList() {
      this.dataListLoading = true;
      this.$http({
        url: this.$http.adornUrl("/app/ask/list"),
        method: "get",
        params: this.$http.adornParams({
          keyword:this.keyword,
          page: this.pageIndex,
          size: this.pageSize,
          type: this.tabIndex,
        }),
      })
        .then(({ data }) => {
          if (data && data.code === 200) {
            // this.$cookie.set("token", data.token);
            // this.$router.replace({ name: "home" });

            let all;
            switch (this.tabIndex) {
              case "recommend":
                all = data.result.list;
                all.forEach((item) => {
                  item.all_text = this.removeHTMLTag(item.content);
                  item.collapsedText =
                    item.all_text.substring(0, item.all_text.length / 5) +
                    "...";

                  item.isVote
                    ? (item.voteTyps = "up")
                    : (item.voteTyps = "neutral");

                  item.open = false;
                });

                this.askList = all;
                break;

              default:
                all = data.result.list;
                all.forEach((item) => {
                  item.all_text = this.removeHTMLTag(item.content);
                  item.collapsedText =
                    item.all_text.substring(0, item.all_text.length / 5) +
                    "...";

                  item.isVote
                    ? (item.voteTyps = "up")
                    : (item.voteTyps = "neutral");

                  item.open = false;
                });

                this.askList = all;
                break;
            }

            console.log(this.askList);
          } else {
            this.$message.error(data.msg);
            this.dataListLoading = false;
          }
        })
        .catch((err) => {
          this.$message.error("获取数据失败");
        });
    },

    submitAsk() {
      if (!this.askParams.title) {
        this.$message.error("问题不能为空");
      }

      this.askParams.content = this.$refs.editor.editorContent;

      this.$http({
        url: this.$http.adornUrl("/app/ask/createAsk"),
        method: "post",
        data: this.$http.adornData({
          title: this.askParams.title,
          content: this.askParams.content,
          anonymity: this.askParams.anonymity,
        }),
      }).then(({ data }) => {
        if (data && data.code === 200) {
          // this.$cookie.set("token", data.token);
          // this.$router.replace({ name: "home" });

          this.askModal = false;
          this.$message({
            message: "问题提交成功",
            type: "success",
            duration: 1500,
            onClose: () => {
              this.getAskList();
            },
          });
        } else {
          this.$message.error(data.msg);
          this.dataListLoading = false;
        }
      });
    },

    // 赞同or 取消赞同 or 不赞同
    voteEvent(item, str) {
      this.dataListLoading = false;

      let typs = "";

      if (str == "down") {
        typs = str;
        item.votes--;
      } else {
        if (item.voteTyps == "neutral") {
          typs = "up";
          item.voteTyps = "up";
          item.votes++;
        } else {
          typs = "neutral";
          item.voteTyps = "neutral";
          item.votes--;
        }
      }

      this.$http({
        url: this.$http.adornUrl("/app/ask/vote"),
        method: "post",
        data: this.$http.adornData({
          type: typs,
          id: item.id,
        }),
        noLoading: true,
      }).then(({ data }) => {
        if (data && data.code === 200) {
        } else {
          this.$message.error(data.msg);
          this.dataListLoading = false;
        }
      });
    },

    removeHTMLTag(str) {
      str = str.replace(/<\/?[^>]*>/g, ""); //去除HTML tag
      str = str.replace(/[ | ]*\n/g, "\n"); //去除行尾空白
      //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
      str = str.replace(/ /gi, ""); //去掉
      return str;
    },

    uploadImg(item) {
      let formData = new FormData();
      formData.append("file", item.file);

      console.log(formData);

      this.$http({
        url: this.$http.adornUrl("/app/upload"),
        method: "post",
        data: formData,
      }).then(({ data }) => {
        if (data && data.code === 200) {
          // this.$cookie.set("token", data.token);
          // this.$router.replace({ name: "home" });
        } else {
          this.$message.error(data.msg);
          this.dataListLoading = false;
        }
      });
    },

    beforeUpload(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    tabChange() {
      this.askList.length = 0;

      this.getAskList();

      Bus.$emit("homeTabChange", this.tabIndex);
    },

    openAllText(item) {
      item.open = !item.open;
    },
  },

  mounted() {
    Bus.$on("askBtn", () => {
      this.askModal = true;
      this.askParams = {
        content: "",
        anonymity: false,
        title: "",
      };
    });

    Bus.$on("search",(str)=>{
      this.keyword = str;
      this.getAskList();
    })

    Bus.$on("pullTabChange", (res) => {
      console.log(res);

      switch (res) {
        case 1:
          this.tabIndex = "recommend";
          break;
        case 2:
          this.tabIndex = "follow";
          break;
        case 3:
          this.tabIndex = "hot";
          break;

        default:
          break;
      }
    });

    this.getAskList();

    console.log(this.userInfo);

    if (!this.userInfo || !this.userInfo.userName) {
      this.addVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init();
      });
    }
  },
};
</script>

<style scoped lang="scss">
.home_container {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  .home_content {
    display: flex;
    align-items: flex-start;
    width: 1000px;
    padding: 10px 16px;
    margin: 0 auto;
    .home_mainColumn {
      flex-shrink: 0;
      margin-right: 10px;
      margin-bottom: 0;
      width: 694px;
      height: 300px;
      background-color: #fff;
    }
    .home_sideBar {
      flex: 1 1;
      font-size: 14px;
      height: 100vh;
      background-color: #eee;
    }
  }

  .ask_header {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    .img {
      width: 30px;
      height: 30px;
      margin-right: 15px;
    }
    .el-textarea__inner {
      resize: none;
    }
  }

  .ask_footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .askItem {
    padding: 20px;
    font-size: 15px;
    color: #121212;
    border-bottom: 1px solid #ddd;
    .userInfo {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
      .avatar {
        width: 24px;
        height: 24px;
      }
      .username {
        color: #444;
        font-size: 18px;
        margin: 0 10px;
      }
    }
    .title {
      font-size: 18px;
      line-height: 1.6;
      color: #121212;
      font-weight: 600;
      margin: 0;
    }
    .contentItem_more {
      padding: 0;
      margin-left: 4px;
      color: #175199;
      height: auto;
      line-height: inherit;
      background-color: transparent;
      border: none;
      border-radius: 0;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      background: none;
      display: inline-block;
    }

    .rich_content_actions {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      margin: 0 -20px -10px;
      color: #646464;
      .voteButton {
        color: #06f;
        background: rgba(0, 102, 255, 0.1);
        line-height: 30px;
        padding: 0 12px;
        border: none;
        margin-right: 4px;
        cursor: pointer;
        font-size: 14px;
      }
      .voteButtonActive {
        background: #06f;
        color: #fff;
      }
      .commentButton {
        margin-left: 24px;
        font-size: 14px;
        line-height: inherit;
        background-color: transparent;
        border: none;
        border-radius: 0;
        color: #8590a6;
        cursor: pointer;
        .Button-zi {
          margin-right: 4px;
        }
      }
      .community {
        color: #8590a6;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 230px;
        margin-left: 20px;
        .svgIcon {
          font-size: 18px;
        }
        .item {
          cursor: pointer;
        }
      }
    }
  }

  .ContentItem-arrowIcon.is-active {
    transform: rotate(180deg);
  }
}
</style>
