import ArtalkConfig from "~/types/artalk-config"

const defaults: ArtalkConfig = {
  el: '',
  pageKey: '',
  pageTitle: '',
  server: '',
  site: '',

  placeholder: '',
  noComment: '',
  sendBtn: '',
  darkMode: false,
  editorTravel: true,

  flatMode: 'auto',
  nestMax: 2,
  nestSort: 'DATE_ASC',

  emoticons: "https://cdn.jsdelivr.net/gh/ArtalkJS/Emoticons/grps/default.json",

  vote: true,
  voteDown: false,
  uaBadge: true,
  listSort: true,
  preview: true,
  countEl: '#ArtalkCount',
  pvEl: '#ArtalkPV',

  gravatar: {
    default: 'mp',
    mirror: 'https://sdn.geekzu.org/avatar/',
  },

  pagination: {
    pageSize: 20,
    readMore: true,
    autoLoad: true,
  },

  heightLimit: {
    content: 300,
    children: 400,
  },

  imgUpload: true,
  reqTimeout: 15000,
  versionCheck: true,
  useBackendConf: false,

  locale: 'zh-CN',
}

if (ARTALK_LITE) {
  defaults.vote = false
  defaults.uaBadge = false
  defaults.emoticons = false
}

export default defaults
