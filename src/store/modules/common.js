export default {
  namespaced: true,
  state: {
   Loading:false,
   customerInfo:null,
   menuList: [],
   menuActiveName: '',
   // 内容, 是否需要刷新
   contentIsNeedRefresh: false,
   // 主入口标签页
   mainTabs: [],
   mainTabsActiveName: '',
   
    // 内容, 是否需要刷新
  contentIsNeedRefresh: false, 
  documentClientHeight:0
  },
  mutations: {
    showLoading (state) {
      state.Loading = true
    },
    hideLoading  (state, type) {
      state.Loading = false
    },
    updateUserInfo (state, obj) {
      state.customerInfo = obj
    },
    updateMainTabs (state, tabs) {
      state.mainTabs = tabs
    },
    updateMainTabsActiveName (state, name) {
      state.mainTabsActiveName = name
    },
    updateContentIsNeedRefresh (state, status) {
      state.contentIsNeedRefresh = status
    },
    updateDocumentClientHeight (state, height) {
      state.documentClientHeight = height
    },
  }
}
