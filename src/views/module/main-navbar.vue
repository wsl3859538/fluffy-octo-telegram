<template>
  <div class="mod-navbar" ref="header" :class="{ 'fixed-navbar': pullTop }">
    <div class="header">
      <a href="#">
        <svg
          t="1619167575209"
          class="icon"
          viewBox="0 0 1536 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2060"
          width="128"
          height="128"
        >
          <path
            d="M1116.16 435.2a1 1 0 1 0 102.4 0 1 1 0 1 0-102.4 0Z"
            p-id="2061"
            fill="#1296db"
          ></path>
          <path
            d="M1320.96 399.36c-5.12-5.12-15.36-5.12-25.6-5.12-30.72 0-51.2 25.6-51.2 51.2 0 25.6 15.36 46.08 35.84 51.2 87.04 25.6 148.48 107.52 148.48 199.68 0 117.76-97.28 209.92-215.04 209.92-102.4 0-189.44-71.68-209.92-163.84 0 0 0-5.12 0-5.12-5.12-30.72-25.6-51.2-56.32-51.2-30.72 0-56.32 25.6-56.32 51.2 0 5.12 0 15.36 5.12 20.48 30.72 143.36 158.72 256 317.44 256 179.2 0 322.56-143.36 322.56-317.44C1536 558.08 1443.84 440.32 1320.96 399.36z"
            p-id="2062"
            fill="#1296db"
          ></path>
          <path
            d="M1500.16 552.96c-35.84-71.68-102.4-128-179.2-158.72-5.12-5.12-15.36-5.12-25.6-5.12-30.72 0-51.2 25.6-51.2 51.2 0 25.6 15.36 46.08 35.84 51.2 87.04 25.6 148.48 107.52 148.48 199.68 0 97.28-66.56 179.2-153.6 204.8 133.12-30.72 235.52-148.48 235.52-286.72C1505.28 588.8 1505.28 573.44 1500.16 552.96z"
            p-id="2063"
            fill="#1296db"
          ></path>
          <path
            d="M322.56 486.4c5.12 0 10.24 0 15.36 0l0 0c30.72 0 51.2-25.6 51.2-51.2 0-30.72-25.6-51.2-51.2-51.2 0 0 0 0 0 0-5.12 0-5.12 0-10.24 0C143.36 378.88 0 522.24 0 696.32s143.36 317.44 322.56 317.44c5.12 0 10.24 0 15.36 0l5.12-97.28c-5.12 0-10.24 0-15.36 0-133.12-15.36-215.04-97.28-215.04-215.04S204.8 486.4 322.56 486.4z"
            p-id="2064"
            fill="#1296db"
          ></path>
          <path
            d="M537.6 0c-5.12 0-15.36 0-20.48 0 0 0-5.12 0-5.12 0-30.72 0-51.2 25.6-51.2 51.2L460.8 819.2c0 30.72 25.6 51.2 51.2 51.2 30.72 0 51.2-25.6 51.2-51.2L563.2 107.52c209.92 15.36 378.88 189.44 378.88 399.36 0 215.04-179.2 363.52-389.12 399.36l0 0c-40.96 5.12-81.92 10.24-128 10.24-46.08 0-92.16-5.12-133.12-10.24-117.76-25.6-184.32-102.4-184.32-209.92 0-5.12 0-15.36 0-20.48C107.52 696.32 102.4 711.68 102.4 732.16c0 107.52 51.2 204.8 128 266.24 5.12 0 15.36 5.12 20.48 5.12l0 0C307.2 1018.88 368.64 1024 430.08 1024c25.6 0 56.32 0 81.92-5.12l0 0c0 0 5.12 0 5.12 0 5.12 0 10.24 0 15.36 0 0 0 5.12 0 5.12 0 271.36-25.6 512-230.4 512-512S824.32 0 537.6 0z"
            p-id="2065"
            fill="#1296db"
          ></path>
          <path
            d="M727.04 35.84c-25.6-10.24-51.2-15.36-76.8-20.48C599.04 20.48 563.2 56.32 563.2 107.52c0 0 0 0 0 0 61.44 5.12 122.88 20.48 174.08 51.2 122.88 71.68 204.8 199.68 204.8 348.16 0 215.04-179.2 363.52-389.12 399.36l0 0c-40.96 5.12-81.92 10.24-128 10.24-46.08 0-92.16-5.12-133.12-10.24-117.76-25.6-184.32-102.4-184.32-209.92 0-5.12 0-15.36 0-20.48C107.52 696.32 102.4 711.68 102.4 732.16c0 107.52 51.2 204.8 128 266.24 5.12 0 15.36 5.12 20.48 5.12l0 0C307.2 1018.88 368.64 1024 430.08 1024c25.6 0 56.32 0 81.92-5.12l0 0c0 0 5.12 0 5.12 0 5.12 0 10.24 0 15.36 0 0 0 5.12 0 5.12 0 271.36-25.6 512-230.4 512-512C1054.72 291.84 916.48 107.52 727.04 35.84z"
            p-id="2066"
            fill="#1296db"
          ></path>
          <path
            d="M727.04 35.84c-25.6-10.24-51.2-15.36-76.8-20.48C599.04 20.48 563.2 56.32 563.2 107.52c0 0 0 0 0 0 61.44 5.12 122.88 20.48 174.08 51.2 122.88 71.68 204.8 199.68 204.8 348.16 0 215.04-179.2 363.52-389.12 399.36l0 0c-40.96 5.12-81.92 10.24-128 10.24-46.08 0-92.16-5.12-133.12-10.24-117.76-25.6-184.32-102.4-184.32-209.92 0-5.12 0-15.36 0-20.48C107.52 696.32 102.4 711.68 102.4 732.16c0 107.52 51.2 204.8 128 266.24 5.12 0 15.36 5.12 20.48 5.12l0 0C307.2 1018.88 368.64 1024 430.08 1024c25.6 0 56.32 0 81.92-5.12l0 0c0 0 5.12 0 5.12 0 5.12 0 10.24 0 15.36 0 0 0 5.12 0 5.12 0 271.36-25.6 512-230.4 512-512C1054.72 291.84 916.48 107.52 727.04 35.84z"
            p-id="2067"
            fill="#1296db"
          ></path>
        </svg>
      </a>
      <ul class="tabs">
        <li class="tabs-item">
          <a
            class="tabs-item-link"
            :class="{ 'is-active': tabsIndex == 1 }"
            @click="navigatorChange(1)"
            >首页</a
          >
        </li>
        <li class="tabs-item">
          <a
            class="tabs-item-link"
            :class="{ 'is-active': tabsIndex == 2 }"
            @click="navigatorChange(2)"
            >会员</a
          >
        </li>
        <li class="tabs-item">
          <a
            class="tabs-item-link"
            :class="{ 'is-active': tabsIndex == 3 }"
            @click="navigatorChange(3)"
            >发现</a
          >
        </li>
        <li class="tabs-item">
          <a
            class="tabs-item-link"
            :class="{ 'is-active': tabsIndex == 4 }"
            @click="navigatorChange(4)"
            >等你来答</a
          >
        </li>
      </ul>

      <!-- search -->
      <div class="search_container">
        <div
          class="searchBar-tool"
          :class="{ 'searchBar-tool-focus': hideBtn }"
        >
          <el-autocomplete
            popper-class="my-autocomplete"
            v-model="keyword"
            :fetch-suggestions="querySearch"
            :select-when-unmatched="true"
            placeholder="苏炳添和博尔特差距还有多远"
            @select="handleSelect"
            @focus="hideBtn = true"
            @blur="hideBtn = false"
          >
            <i class="el-icon-search el-input__icon" slot="suffix"> </i>
            <template slot-scope="{ item }">
              <div v-if="item.first">
                <div class="first_name">{{ item.value }}</div>
              </div>

              <div v-if="!item.first" class="optionItem">
                <div class="name">{{ item.value }}</div>
                <span class="span" v-if="item.hot"
                  ><i class="el-icon-magic-stick"></i
                ></span>
              </div>
            </template>
          </el-autocomplete>
        </div>
        <button
          class="ask_btn"
          :class="{ hiddenAskButton: hideBtn }"
          @click="askEvent()"
        >
          提问
        </button>
      </div>

      <!-- userInfo -->
      <div class="userInfo_container">
        <div class="badge">
          <el-badge :value="200" :max="99" class="item">
            <span><i class="el-icon-bell"></i></span>
          </el-badge>
        </div>
        <div class="badge">
          <el-badge :value="200" :max="99" class="item">
            <span><i class="el-icon-chat-round"></i></span>
          </el-badge>
        </div>
        <div class="avatar" @click="clickAvatar()">
          <img
            :src="avatar"
            width="30"
            height="30"
            alt=""
            @click="askModal = true"
          />
          <div class="popover_content" v-if="popover_info">
            <span class="arrow_bottom"></span>
            <div class="popItem">
              <i class="el-icon-user-solid"></i>
              <span class="span">我的主页</span>
            </div>
            <div class="popItem">
              <i class="el-icon-s-tools"></i>
              <span class="span">设置</span>
            </div>
            <div class="popItem">
              <i class="el-icon-info"></i>
              <span class="span">退出</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header header-shown">
      <div style="display: flex">
        <a href="#">
          <svg
            t="1619167575209"
            class="icon"
            viewBox="0 0 1536 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2060"
            width="128"
            height="128"
          >
            <path
              d="M1116.16 435.2a1 1 0 1 0 102.4 0 1 1 0 1 0-102.4 0Z"
              p-id="2061"
              fill="#1296db"
            ></path>
            <path
              d="M1320.96 399.36c-5.12-5.12-15.36-5.12-25.6-5.12-30.72 0-51.2 25.6-51.2 51.2 0 25.6 15.36 46.08 35.84 51.2 87.04 25.6 148.48 107.52 148.48 199.68 0 117.76-97.28 209.92-215.04 209.92-102.4 0-189.44-71.68-209.92-163.84 0 0 0-5.12 0-5.12-5.12-30.72-25.6-51.2-56.32-51.2-30.72 0-56.32 25.6-56.32 51.2 0 5.12 0 15.36 5.12 20.48 30.72 143.36 158.72 256 317.44 256 179.2 0 322.56-143.36 322.56-317.44C1536 558.08 1443.84 440.32 1320.96 399.36z"
              p-id="2062"
              fill="#1296db"
            ></path>
            <path
              d="M1500.16 552.96c-35.84-71.68-102.4-128-179.2-158.72-5.12-5.12-15.36-5.12-25.6-5.12-30.72 0-51.2 25.6-51.2 51.2 0 25.6 15.36 46.08 35.84 51.2 87.04 25.6 148.48 107.52 148.48 199.68 0 97.28-66.56 179.2-153.6 204.8 133.12-30.72 235.52-148.48 235.52-286.72C1505.28 588.8 1505.28 573.44 1500.16 552.96z"
              p-id="2063"
              fill="#1296db"
            ></path>
            <path
              d="M322.56 486.4c5.12 0 10.24 0 15.36 0l0 0c30.72 0 51.2-25.6 51.2-51.2 0-30.72-25.6-51.2-51.2-51.2 0 0 0 0 0 0-5.12 0-5.12 0-10.24 0C143.36 378.88 0 522.24 0 696.32s143.36 317.44 322.56 317.44c5.12 0 10.24 0 15.36 0l5.12-97.28c-5.12 0-10.24 0-15.36 0-133.12-15.36-215.04-97.28-215.04-215.04S204.8 486.4 322.56 486.4z"
              p-id="2064"
              fill="#1296db"
            ></path>
            <path
              d="M537.6 0c-5.12 0-15.36 0-20.48 0 0 0-5.12 0-5.12 0-30.72 0-51.2 25.6-51.2 51.2L460.8 819.2c0 30.72 25.6 51.2 51.2 51.2 30.72 0 51.2-25.6 51.2-51.2L563.2 107.52c209.92 15.36 378.88 189.44 378.88 399.36 0 215.04-179.2 363.52-389.12 399.36l0 0c-40.96 5.12-81.92 10.24-128 10.24-46.08 0-92.16-5.12-133.12-10.24-117.76-25.6-184.32-102.4-184.32-209.92 0-5.12 0-15.36 0-20.48C107.52 696.32 102.4 711.68 102.4 732.16c0 107.52 51.2 204.8 128 266.24 5.12 0 15.36 5.12 20.48 5.12l0 0C307.2 1018.88 368.64 1024 430.08 1024c25.6 0 56.32 0 81.92-5.12l0 0c0 0 5.12 0 5.12 0 5.12 0 10.24 0 15.36 0 0 0 5.12 0 5.12 0 271.36-25.6 512-230.4 512-512S824.32 0 537.6 0z"
              p-id="2065"
              fill="#1296db"
            ></path>
            <path
              d="M727.04 35.84c-25.6-10.24-51.2-15.36-76.8-20.48C599.04 20.48 563.2 56.32 563.2 107.52c0 0 0 0 0 0 61.44 5.12 122.88 20.48 174.08 51.2 122.88 71.68 204.8 199.68 204.8 348.16 0 215.04-179.2 363.52-389.12 399.36l0 0c-40.96 5.12-81.92 10.24-128 10.24-46.08 0-92.16-5.12-133.12-10.24-117.76-25.6-184.32-102.4-184.32-209.92 0-5.12 0-15.36 0-20.48C107.52 696.32 102.4 711.68 102.4 732.16c0 107.52 51.2 204.8 128 266.24 5.12 0 15.36 5.12 20.48 5.12l0 0C307.2 1018.88 368.64 1024 430.08 1024c25.6 0 56.32 0 81.92-5.12l0 0c0 0 5.12 0 5.12 0 5.12 0 10.24 0 15.36 0 0 0 5.12 0 5.12 0 271.36-25.6 512-230.4 512-512C1054.72 291.84 916.48 107.52 727.04 35.84z"
              p-id="2066"
              fill="#1296db"
            ></path>
            <path
              d="M727.04 35.84c-25.6-10.24-51.2-15.36-76.8-20.48C599.04 20.48 563.2 56.32 563.2 107.52c0 0 0 0 0 0 61.44 5.12 122.88 20.48 174.08 51.2 122.88 71.68 204.8 199.68 204.8 348.16 0 215.04-179.2 363.52-389.12 399.36l0 0c-40.96 5.12-81.92 10.24-128 10.24-46.08 0-92.16-5.12-133.12-10.24-117.76-25.6-184.32-102.4-184.32-209.92 0-5.12 0-15.36 0-20.48C107.52 696.32 102.4 711.68 102.4 732.16c0 107.52 51.2 204.8 128 266.24 5.12 0 15.36 5.12 20.48 5.12l0 0C307.2 1018.88 368.64 1024 430.08 1024c25.6 0 56.32 0 81.92-5.12l0 0c0 0 5.12 0 5.12 0 5.12 0 10.24 0 15.36 0 0 0 5.12 0 5.12 0 271.36-25.6 512-230.4 512-512C1054.72 291.84 916.48 107.52 727.04 35.84z"
              p-id="2067"
              fill="#1296db"
            ></path>
          </svg>
        </a>
        <ul class="tabs">
          <li class="tabs-item">
            <a
              class="tabs-item-link"
              :class="{ 'is-active': subjectType == 'recommend' }"
              @click="tabChange('recommend')"
              >推荐</a
            >
          </li>
          <li class="tabs-item">
            <a
              class="tabs-item-link"
              :class="{ 'is-active': subjectType == 'follow' }"
              @click="tabChange('follow')"
              >关注</a
            >
          </li>
          <li class="tabs-item">
            <a
              class="tabs-item-link"
              :class="{ 'is-active': subjectType == 'hot' }"
              @click="tabChange('hot')"
              >热榜</a
            >
          </li>
        </ul>
      </div>

      <!-- search -->
      <div class="search_container">
        <div
          class="searchBar-tool"
          :class="{ 'searchBar-tool-focus': hideBtn }"
        >
          <el-autocomplete
            popper-class="my-autocomplete"
            v-model="keyword"
            :fetch-suggestions="querySearch"
            :select-when-unmatched="true"
            placeholder="苏炳添和博尔特差距还有多远"
            @select="handleSelect"
            @focus="hideBtn = true"
            @blur="hideBtn = false"
          >
            <i class="el-icon-search el-input__icon" slot="suffix"> </i>
            <template slot-scope="{ item }">
              <div v-if="item.first">
                <div class="first_name">{{ item.value }}</div>
              </div>

              <div v-if="!item.first" class="optionItem">
                <div class="name">{{ item.value }}</div>
                <span class="span" v-if="item.hot"
                  ><i class="el-icon-magic-stick"></i
                ></span>
              </div>
            </template>
          </el-autocomplete>
        </div>
        <button
          class="ask_btn"
          :class="{ hiddenAskButton: hideBtn }"
          @click="askEvent()"
        >
          提问
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "../../../bus/index.js";

export default {
  data() {
    return {
      tabsIndex: 1,
      subjectType: "recommend",
      restaurants: [],
      keyword: "",
      hideBtn: false,
      popover_info: false,
      askModal: false,
      askParams: {
        content: "",
      },
      pullTop: false,
    };
  },
  computed: {
    avatar: {
      get() {
        let curAvatar = "";
        if (JSON.parse(this.$cookie.get("userInfo"))) {
          curAvatar = JSON.parse(this.$cookie.get("userInfo")).avatar;
        } else {
          curAvatar = "https://pic4.zhimg.com/da8e974dc_is.jpg";
        }
        return curAvatar;
      },
      set(val) {
        this.$store.commit("common/updateDocumentClientHeight", val);
      },
    },
    // popover_info: {
    //   get() {
    //     console.log(this.popoverValue)
    //     return !this.popoverValue;
    //   },
    //   set(val) {
    //   },
    // },
  },
  methods: {
    navigatorChange(index) {
      this.tabsIndex = index;
    },

    loadAll() {
      return [
        { value: "xx 站热搜", hot: false, first: true },
        { value: "B 站面试官贬低北邮校招生", hot: true },
        { value: "深房理涉嫌非法集资", hot: true },
        { value: "印度单日新增确诊超 34 万例", hot: true },
        { value: "张伟丽卫冕失败", hot: false },
        { value: "晋江作者月逝水疑似轻生", hot: false },
      ];
    },

    askEvent() {
      Bus.$emit("askBtn", true);
    },
    // 选择提示选项回调
    handleSelect(item) {
      Bus.$emit("search", this.keyword);
    },

    // 点击用户投降,弹出下拉
    clickAvatar() {
      this.popover_info = !this.popover_info;
    },

    // 输入时匹配
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },

    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },

    // 监听浏览器滚动
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.pullTop = true;
      } else {
        this.pullTop = false;
      }
    },

    // 下拉出现的tabView的变更,tabView变的与home页面相关,所以tab点击切换时,要与home建立联系
    tabChange(str) {
      this.subjectType = str;
      Bus.$emit("pullTabChange", str);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();

    window.addEventListener("scroll", this.handleScroll, true);

    // home页面点击tab时同步过来
    Bus.$on("homeTabChange", (str) => {
      console.log(str);
      this.subjectType = str;
    });
  },
};
</script>

<style scoped lang="scss">
.mod-navbar {
  position: relative;
  z-index: 100;
  min-width: 1000px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
  border-bottom: 1px solid #eee;
  overflow: hidden;

  .header {
    width: auto;
    max-width: 1156px;
    min-width: 1000px;
    position: relative;
    display: flex;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    align-items: center;
    transition: transform 0.3s, -webkit-transform 0.3s;
    .icon {
      width: 64px;
      height: 48px;
    }
    .tabs {
      border-bottom: none;
      display: flex;
      flex-shrink: 0;
      padding: 0;
      margin: 0 16px;
      &-item {
        display: inline-block;
        padding: 0 20px;
        &-link {
          position: relative;
          display: inline-block;
          padding: 14px 0;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          cursor: pointer;
          color: #8590a6;
        }
      }
      .is-active {
        font-weight: 600;
        color: #121212;

        &::after {
          position: absolute;
          right: 0;
          bottom: -1px;
          left: 0;
          height: 3px;
          background: #06f;
          content: "";
        }
      }
    }

    .search_container {
      max-width: 482px;
      height: 34px;
      display: flex;
      flex-grow: 1;
      position: relative;
      .searchBar-tool {
        flex-grow: 1;
        height: 100%;
        position: relative;
        width: 100%;
        z-index: 104;
      }
      .searchBar-tool-focus {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .ask_btn {
        border-radius: 999px;
        width: 70px;
        margin-left: 12px;
        color: #fff;
        background-color: #06f;
        padding: 0 14px;
        transition: opacity 0.3s ease, transform 0.3s ease;
        line-height: 30px;
        border: 1px solid;
        font-size: 14px;
        cursor: pointer;
      }
    }

    .userInfo_container {
      display: flex;
      width: auto;
      align-items: center;
      padding-left: 40px;
      position: relative;
      top: 5px;
      .badge {
        margin-right: 40px;
        font-size: 24px;
        cursor: pointer;
      }
      .avatar {
        cursor: pointer;
        position: relative;
        .arrow_bottom {
          width: 32px;
          height: 16px;
          -webkit-transform: translate(-50%, -100%);
          transform: translate(-50%, -100%);
          position: absolute;
          top: 0;
          left: 60px;
          overflow: hidden;
          &::after {
            content: "";
            position: absolute;
            box-sizing: border-box;
            width: 24px;
            height: 24px;
            margin: -12px;
            border: 1px solid #ebebeb;
            background: #fff;
            transform: rotate(45deg);
            pointer-events: auto;
            left: 50%;
            bottom: -8px;
          }
        }

        .popover_content {
          position: absolute;
          bottom: -133px;
          left: -45px;
          width: 120px;
          padding: 8px 0;
          border: 1px solid #ebebeb;
          background-color: #fff;
          box-shadow: 0 5px 20px rgba(18, 18, 18, 0.1);
          .popItem {
            font-size: 14px;
            padding: 0 20px;
            height: 36px;
            display: flex;
            align-items: center;
            color: #8590a6;
            &:hover {
              background-color: #eee;
            }
            .span {
              margin-left: 8px;
            }
          }
        }
      }
    }
  }

  .header-shown {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s;
    transform: translateY(100%);
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
  }
}

.fixed-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  .header {
    transform: translateY(-100%);
  }
  .header-shown {
    transform: translateY(0);
  }
}

.hiddenAskButton {
  opacity: 0;
  transform: scale(0);
}

.my-autocomplete {
  li {
    .first_name {
      color: #aaa;
      border-bottom: 1px solid #ccc;
      cursor: default;
      &:hover {
        background-color: transparent !important;
      }
    }
    .optionItem {
      display: flex;
      margin: 3px 0;
      .span {
        color: red;
        margin-left: 10px;
      }
    }
  }

  .el-input__suffix {
    cursor: pointer;
  }
}
</style>
