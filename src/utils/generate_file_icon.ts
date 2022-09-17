import { Folder, LogoMarkdown, FileTraySharp } from '@vicons/ionicons5';
import {
  DocumentCss20Regular,
  DocumentTextExtract20Regular,
  DocumentChevronDouble20Regular,
  DocumentJavascript20Regular,
  DocumentPercent20Regular,
  DocumentPdf32Filled,
  DocumentBulletList20Regular,
  MusicNote2Play20Regular,
  Document20Regular,
  DocumentBulletListClock20Regular,
} from '@vicons/fluent';
import { shallowRef } from 'vue';
import { EXTENDS_MAP } from '@/constants';
import { FileIconType } from '@/models/file';

export const generate_file_icon = (ext: string): [type: string, icon: FileIconType | string] => {
  const _ext = ext.slice(1).toLowerCase();
  if (_ext === '') {
    return ['文件夹', { style: 'text-primary', icon: shallowRef(Folder) }];
  } else if (EXTENDS_MAP.IMAGE.includes(_ext)) {
    return ['图片', 'media'];
  } else if (EXTENDS_MAP.WORD.includes(_ext)) {
    return ['文档', { style: 'text-gray-500', icon: shallowRef(DocumentTextExtract20Regular) }];
  } else if (EXTENDS_MAP.CSV.includes(_ext)) {
    return ['csv', { style: 'text-gray-500', icon: shallowRef(DocumentBulletListClock20Regular) }];
  } else if (EXTENDS_MAP.CSS.includes(_ext)) {
    return ['样式文件', { style: 'text-gray-500', icon: shallowRef(DocumentCss20Regular) }];
  } else if (EXTENDS_MAP.CODE_SOURCE.includes(_ext)) {
    return [
      `${_ext}源文件`,
      { style: 'text-gray-500', icon: shallowRef(DocumentChevronDouble20Regular) },
    ];
  } else if (EXTENDS_MAP.JSON.includes(_ext)) {
    return ['json', { style: 'text-yellow-500', icon: shallowRef(DocumentJavascript20Regular) }];
  } else if (EXTENDS_MAP.JAVASCRIPT.includes(_ext)) {
    return [
      'js源文件',
      { style: 'text-yellow-500', icon: shallowRef(DocumentJavascript20Regular) },
    ];
  } else if (EXTENDS_MAP.EXCEL.includes(_ext)) {
    return ['表格', { style: 'text-gray-500', icon: shallowRef(DocumentPercent20Regular) }];
  } else if (EXTENDS_MAP.PPT.includes(_ext)) {
    return ['幻灯片', { style: 'text-red-400', icon: shallowRef(DocumentTextExtract20Regular) }];
  } else if (EXTENDS_MAP.PDF.includes(_ext)) {
    return ['PDF', { style: 'text-gray-500', icon: shallowRef(DocumentPdf32Filled) }];
  } else if (EXTENDS_MAP.ZIP.includes(_ext)) {
    return ['压缩文件', { style: 'text-primary', icon: shallowRef(FileTraySharp) }];
  } else if (EXTENDS_MAP.TXT.includes(_ext)) {
    return ['文本文件', { style: 'text-gray-500', icon: shallowRef(DocumentBulletList20Regular) }];
  } else if (EXTENDS_MAP.AUDIO.includes(_ext)) {
    return ['音频文件', { style: 'text-primary', icon: shallowRef(MusicNote2Play20Regular) }];
  } else if (EXTENDS_MAP.VIDEO.includes(_ext)) {
    return ['视频文件', 'media'];
  } else if (EXTENDS_MAP.MARKDOWN.includes(_ext)) {
    return ['markdown', { style: 'text-secondary', icon: shallowRef(LogoMarkdown) }];
  } else {
    return [_ext, { style: 'text-gray-500', icon: shallowRef(Document20Regular) }];
  }
};
