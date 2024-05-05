export const LOCAL_TYPES = {
  ZH: {
    value: 'zh',
    label: '简体中文',
  },
  ZH_HK: {
    value: 'zh-HK',
    label: '繁体中文',
  },
  EN: {
    value: 'en',
    label: '英文',
  },
};

export const localsList = [
  LOCAL_TYPES.ZH,
  LOCAL_TYPES.ZH_HK,
  // LOCAL_TYPES.EN
];

// for server
export const locales = [
  LOCAL_TYPES.ZH.value,
  LOCAL_TYPES.ZH_HK.value,
  // 'zh-TW',
  // LOCAL_TYPES.EN.value,
];

export const localePrefix = 'as-needed';
