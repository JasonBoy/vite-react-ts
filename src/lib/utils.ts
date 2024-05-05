import dayjs, { type ConfigType } from 'dayjs';

export function sleep(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DATE_TIME_FORMAT_TO_MINUTE = 'YYYY-MM-DD HH:mm';
export const DATE_TIME_FORMAT_FULL = 'YYYY-MM-DD HH:mm:ss.SSS';

export function formatDate(date?: ConfigType, format = DATE_FORMAT) {
  return dayjs(date).format(format);
}
