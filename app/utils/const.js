const TIMESGUIDE_CDN_STYLES = {
  SMALL_CUT:
    'imageMogr2/auto-orient/thumbnail/180x2000/gravity/North/crop/x350/format/webp/blur/1x0/quality/75|imageslim'
}

const MARK_RULE = {
  EXCHANGE_WITH_USER: 10,
  EXCHANGE_WITH_NPC: -10
}

const EXCHANGE_ACTION_TYPE = {
  GIVE: 1,
  WITH_NPC: 2,
  CREATE_WITH_USER: 3,
  JOIN_WITH_USER: 4
}

const EXCHANGE_STATUS = {
  DELETED: 0,
  HAVE: 1,
  SELL: 2
}

const TIMESGUIDE_CHILDREN_STATUS = {
  DELETE: 0,
  OPEN: 1,
  STARTED: 2 //交换中
}

const MESSAGE_TYPE = {
  DEFAULT: 0,
  EXCHANGE: 1,
  CONTRIBUTE: 2
}

const ERROR_CODE = {
  SEESION_FAIL: 40001
}

const MAX_GIVE = 4

module.exports = {
  MARK_RULE,
  TIMESGUIDE_CDN_STYLES,
  EXCHANGE_ACTION_TYPE,
  MAX_GIVE,
  MESSAGE_TYPE,
  EXCHANGE_STATUS,
  TIMESGUIDE_CHILDREN_STATUS,
  ERROR_CODE
}

/* ## 积分管理

1.  上传时间表：根据质量获得 20-100 积分

2.  上传时间表相关内容，每次获得 10 点积分，每日上限 200 分

## 时间表质量评分

5 星: 完美（扫描图） 100 分
4 星: 较好（实拍图） 60 分
3 星: 普通（实拍图或较好网络图） 40 分
2 星: 一般 20 分
1 星: 能看 10 分

## 获得数字时间表积分消耗

下载时间表所需积分：

普通版：20分，正藏版：50分，稀有版：80分，每3个月上涨10分

下载规则，时间表当季免费认领，每人最多认领5张，总量1000张

与系统交换：收取15点积分手续费

与玩家交换：免费

积分递增：
每个季度（3个月）增加1分

## 数字时间表交换


## 个人资料

我的贡献我的完成度我获得的时间表

注册获得 50 分，分享获得 50 分，完善资料获得 50 分

时间表猜猜：猜竞猜下一张时间表出现的人物

时间表参数

关键词，相关人物，框选

你可以分享所有和这张时间表封面有关的图片，电影，人物等等

分享海外时间表多倍积分 香港2倍 美国4倍 巴黎3倍

上传规则:

需上传比当前版本更清晰完整的图片，如已达到完美品质，则关闭上传

审核通过即可获得时间表兑换券一张，可兑换一张任何时间表（有效期30天）

## 向玩家发起交换流程

### 数字时间表交换

1. A发起请求，B收到请求，B确定，交换成功；B确定如A已和其它交换则

A发起后不可撤销，A可向多个B发起


*/

// REGISTER_MARK = 5
// UPLOAD_TIMESGUIDE_5X = 10
// UPLOAD_TIMESGUIDE_4X = 6
// UPLOAD_TIMESGUIDE_3X = 4
// UPLOAD_TIMESGUIDE_2X = 2
// UPLOAD_TIMESGUIDE_1X = 1

// DOWNLOAD_TIMESGUIDE_L3 = 8
// DOWNLOAD_TIMESGUIDE_L2 = 5
// DOWNLOAD_TIMESGUIDE_L1 = 2
