var cfgArr = new Array();

cfgArr[0] = {
	id : 1,
	name : "MoPaiMessageNum",
	desc : "服务端->客户端　摸牌消息",
	netID : 102
},
cfgArr[1] = {
	id : 2,
	name : "MoPaiNoticeNum",
	desc : "服务端->客户端　摸牌通知，即告知其他玩家某个玩家摸了一张牌",
	netID : 103
},
cfgArr[2] = {
	id : 3,
	name : "ChuPaiReminderNum",
	desc : "服务端->客户端　出牌提示，告知客户端需要出牌",
	netID : 201
},
cfgArr[3] = {
	id : 4,
	name : "ChuPaiMessageNum",
	desc : "客户端->服务端　出牌消息",
	netID : 202
},
cfgArr[4] = {
	id : 5,
	name : "ChuPaiNoticeNum",
	desc : "服务端->客户端　出牌通知，即告知其他玩家某个玩家出了一张牌",
	netID : 203
},
cfgArr[5] = {
	id : 6,
	name : "MoPaiZuHeReminderNum",
	desc : "服务端->客户端　摸牌组合操作提示，服务端告知客户端能够进行哪些摸牌组合操作",
	netID : 301
},
cfgArr[6] = {
	id : 7,
	name : "MoPaiZuHeNoticeNum",
	desc : "服务端->客户端　摸牌组合操作通知，服务端告知其他客户端某个客户端进行了哪些摸牌组合操作",
	netID : 302
},
cfgArr[7] = {
	id : 8,
	name : "ChuPaiZuHeReminderNum",
	desc : "服务端->客户端  出牌组合操作提示，服务端告知客户端能够进行哪些出牌组合操作",
	netID : 401
},
cfgArr[8] = {
	id : 9,
	name : "ChuPaiZuHeNoticeNum",
	desc : "服务端->客户端  出牌组合操作通知，服务端告知其他客户端某个客户端进行了哪些出牌组合操作",
	netID : 402
},
cfgArr[9] = {
	id : 10,
	name : "ChiPaiMessageNum",
	desc : "客户端->服务端　吃牌消息",
	netID : 501
},
cfgArr[10] = {
	id : 11,
	name : "PengPaiMessageNum",
	desc : "客户端->服务端　碰牌消息",
	netID : 502
},
cfgArr[11] = {
	id : 12,
	name : "MingGang1PaiMessageNum",
	desc : "客户端->服务端　明杠1消息",
	netID : 503
},
cfgArr[12] = {
	id : 13,
	name : "MingGang2PaiMessageNum",
	desc : "客户端->服务端　明杠2消息",
	netID : 504
},
cfgArr[13] = {
	id : 14,
	name : "AnGangPaiMessageNum",
	desc : "客户端->服务端　暗杠消息",
	netID : 505
},
cfgArr[14] = {
	id : 15,
	name : "PuTongHuPaiMessageNum",
	desc : "客户端->服务端　普通胡消息",
	netID : 506
},
cfgArr[15] = {
	id : 16,
	name : "ZiMoHuPaiMessageNum",
	desc : "客户端->服务端　自摸胡消息",
	netID : 507
},
cfgArr[16] = {
	id : 17,
	name : "GuoMoPaiMessageNum",
	desc : "客户端->服务端　过消息（对于摸牌组合操作的响应）",
	netID : 508
},
cfgArr[17] = {
	id : 18,
	name : "GuoChuPaiMessageNum",
	desc : "客户端->服务端　过消息（对于出牌组合操作的响应）",
	netID : 509
},
cfgArr[18] = {
	id : 19,
	name : "RestoreListenReminderNum",
	desc : "服务端->客户端  在客户端点击了某种出牌组合操作（吃碰杠胡）之后，可能接收到两种响应（如吃牌成功ChiPaiAckMessageNum，如吃牌失败RestoreListenReminderNum）．这里吃牌失败是因为别的玩家具有更高优先级的操作",
	netID : "510"
},
cfgArr[19] = {
	id : 20,
	name : "ChiPaiAckMessageNum",
	desc : "服务端→客户端 表示吃牌成功",
	netID : "521"
},
cfgArr[20] = {
	id : 21,
	name : "PengPaiAckMessageNum",
	desc : "服务端→客户端 表示碰牌成功",
	netID : "522"
},
cfgArr[21] = {
	id : 22,
	name : "MingGang2PaiAckMessageNum",
	desc : "服务端→客户端 表示明杠牌成功",
	netID : "523"
},
cfgArr[22] = {
	id : 23,
	name : "PuTongHuPaiAckMessageNum",
	desc : "服务端→客户端 表示普通胡牌成功",
	netID : "524"
},
cfgArr[23] = {
	id : 24,
	name : "MingGang1PaiAckMessageNum",
	desc : "服务端→客户端 表示明杠成功",
	netID : "525"
},
cfgArr[24] = {
	id : 25,
	name : "AnGangPaiAckMessageNum",
	desc : "服务端→客户端 表示暗杠成功",
	netID : "526"
},
cfgArr[25] = {
	id : 26,
	name : "ZiMoHuPaiAckMessageNum",
	desc : "服务端→客户端 表示自摸胡牌成功",
	netID : "527"
},
cfgArr[26] = {
	id : 27,
	name : "QiangGangReminderNum",
	desc : "服务端->客户端　抢杠胡提示",
	netID : 601
},
cfgArr[27] = {
	id : 28,
	name : "QiangGangMessageNum",
	desc : "客户端->服务端　抢杠胡消息",
	netID : 602
},
cfgArr[28] = {
	id : 29,
	name : "QiangGangNoticeNum",
	desc : "服务端->客户端　抢杠胡通知",
	netID : 603
},
cfgArr[29] = {
	id : 30,
	name : "GuoQiangGangMessageNum",
	desc : "客户端->服务端　过抢杠胡",
	netID : 604
},
cfgArr[30] = {
	id : 31,
	name : "QiangGangHuPaiAckMessageNum",
	desc : "服务端→客户端 表示抢杠胡牌成功",
	netID : "605"
},
cfgArr[31] = {
	id : 32,
	name : "CreateRoomMessageNum",
	desc : "客户端->服务端　创建房间消息",
	netID : 701
},
cfgArr[32] = {
	id : 33,
	name : "CreateRoomAckMessageNum",
	desc : "服务端->客户端　创建房间应答",
	netID : 702
},
cfgArr[33] = {
	id : 34,
	name : "EnterRoomMessageNum",
	desc : "客户端->服务端　进入房间消息",
	netID : 711
},
cfgArr[34] = {
	id : 35,
	name : "EnterRoomAckMessageNum",
	desc : "服务端->客户端　进入房间应答",
	netID : 712
},
cfgArr[35] = {
	id : 36,
	name : "EnterRoomNoticeNum",
	desc : "服务端->客户端　进入房间通知，即告知其他玩家，现在有一个新玩家进入房间",
	netID : 713
},
cfgArr[36] = {
	id : 37,
	name : "PrepareMessageNum",
	desc : "客户端->服务端　准备消息",
	netID : 722
},
cfgArr[37] = {
	id : 38,
	name : "PrepareAckMessageNum",
	desc : "服务端->客户端　准备消息回复",
	netID : 723
},
cfgArr[38] = {
	id : 39,
	name : "PrepareNoticeNum",
	desc : "服务端->客户端　准备通知",
	netID : 724
},
cfgArr[39] = {
	id : 40,
	name : "VotingStartMessageNum",
	desc : "客户端->服务端　发起投票",
	netID : 731
},
cfgArr[40] = {
	id : 41,
	name : "VotingReminderNum",
	desc : "服务端->客户端　提示其他玩家有人发起投票",
	netID : 732
},
cfgArr[41] = {
	id : 42,
	name : "VotingMessageNum",
	desc : "客户端->服务端　投票消息",
	netID : 733
},
cfgArr[42] = {
	id : 43,
	name : "VotingRstNoticeNum",
	desc : "服务端->客户端　投票结果通知",
	netID : 734
},
cfgArr[43] = {
	id : 44,
	name : "DissolveRoomMessageNum",
	desc : "客户端->服务端　解散房间消息",
	netID : 741
},
cfgArr[44] = {
	id : 45,
	name : "DissolveRoomAckMessageNum",
	desc : "服务端->客户端　解散房间回复",
	netID : 742
},
cfgArr[45] = {
	id : 46,
	name : "DissolveRoomNoticeNum",
	desc : "服务端->客户端　解散房间通知",
	netID : 743
},
cfgArr[46] = {
	id : 47,
	name : "ExitRoomMessageNum",
	desc : "客户端->服务端　退出房间消息",
	netID : 751
},
cfgArr[47] = {
	id : 48,
	name : "ExitRoomAckMessageNum",
	desc : "服务端->客户端　退出房间回复",
	netID : 752
},
cfgArr[48] = {
	id : 49,
	name : "ExitRoomNoticeNum",
	desc : "服务端->客户端　退出房间通知",
	netID : 753
},
cfgArr[49] = {
	id : 50,
	name : "HeartbeatMessageNum",
	desc : "客户端->服务端　心跳消息",
	netID : 761
},
cfgArr[50] = {
	id : 51,
	name : "FaPaiMessageNum",
	desc : "服务端->客户端  牌局开始时的发牌消息",
	netID : 801
},
cfgArr[51] = {
	id : 52,
	name : "FaPaiAckMessageNum",
	desc : "服务端->客户端  发牌消息回复",
	netID : 802
},
cfgArr[52] = {
	id : 53,
	name : "CaiShengPaiNoticeNum",
	desc : "服务端->客户端  牌局开始时定财神通知",
	netID : 803
},
cfgArr[53] = {
	id : 54,
	name : "BenMenFengReminderNum",
	desc : "服务端->客户端  牌局开始时本门风通知",
	netID : 804
},
cfgArr[54] = {
	id : 55,
	name : "ShengPaiStageNoticeNum",
	desc : "服务端->客户端  生牌阶段通知",
	netID : 805
},
cfgArr[55] = {
	id : 56,
	name : "ZhanJiNoticeNum",
	desc : "服务端->客户端 一局结束时发送战绩",
	netID : "806"
},
cfgArr[56] = {
	id : 57,
	name : "TotalZhanJiNoticeNum",
	desc : "服务端->客户端 一盘结束时发送战绩",
	netID : "807"
},
cfgArr[57] = {
	id : 58,
	name : "OffLineMessageNum",
	desc : "客户端->服务端　下线消息",
	netID : 911
},
cfgArr[58] = {
	id : 59,
	name : "OffLineAckMessageNum",
	desc : "服务端->客户端　下线消息回复",
	netID : 912
},
cfgArr[59] = {
	id : 60,
	name : "OffLineNoticeNum",
	desc : "服务端->客户端　下线消息通知",
	netID : 913
},
cfgArr[60] = {
	id : 61,
	name : "ReconnectNoticeNum",
	desc : "服务端->客户端　通知其他玩家某个玩家重连成功",
	netID : "922"
},
cfgArr[61] = {
	id : 62,
	name : "SyncTileInfoNum",
	desc : "服务端->客户端　在客户端重连成功之后，告知客户端当前牌面信息",
	netID : "923"
},
cfgArr[62] = {
	id : "",
	name : "QueryPanZhanJiMessageNum",
	desc : "客户端->服务端　客户端查询一大盘战绩",
	netID : "931"
},
cfgArr[63] = {
	id : "",
	name : "QueryPanZhanJiAckMessageNum",
	desc : "服务端->客户端　服务端回复战绩信息",
	netID : "932"
},
cfgArr[64] = {
	id : "",
	name : "QueryJuZhanJiMessageNum",
	desc : "客户端->服务端　客户端查询一小局战绩",
	netID : "933"
},
cfgArr[65] = {
	id : "",
	name : "QueryJuZhanJiAckMessageNum",
	desc : "服务端->客户端　服务端回复战绩信息",
	netID : "934"
},
cfgArr[66] = {
	id : "",
	name : "QueryVideoMessageNum",
	desc : "客户端->服务端　客户端查询一小局录像",
	netID : "935"
},
cfgArr[67] = {
	id : "",
	name : "QueryVideoAckMessageNum",
	desc : "服务端->客户端　服务端回复录像信息",
	netID : "936"
},
cfgArr[68] = {
	id : "",
	name : "GetAnnouncementNum",
	desc : "客户端->服务端　客户端获取公告消息，需要上传已经拥有的公告消息",
	netID : "941"
},
cfgArr[69] = {
	id : "",
	name : "GetAnnouncementAckNum",
	desc : "服务端->客户端　服务端回复客户端，告知需要添加以及删产的公告消息",
	netID : "942"
},
cfgArr[70] = {
	id : "",
	name : "GetScrollNewsNum",
	desc : "客户端->服务端　客户端获取公告消息，需要上传已经拥有的滚动消息",
	netID : "943"
},
cfgArr[71] = {
	id : "",
	name : "GetScrollNewsAckNum",
	desc : "服务端->客户端　服务端回复客户端，告知需要添加以及删产的滚动消息",
	netID : "944"
},
cfgArr[72] = {
	id : "",
	name : "PullMailNum",
	desc : "客户端->服务端　客户端获取邮件信息",
	netID : "951"
},
cfgArr[73] = {
	id : "",
	name : "PushMailNum",
	desc : "服务端->客户端　服务端回复客户端邮件信息",
	netID : "952"
},
cfgArr[74] = {
	id : "",
	name : "GetMailComfirmNum",
	desc : "客户端->服务端　客户端接收到邮件之后返回该消息告知服务端",
	netID : "953"
},
cfgArr[75] = {
	id : "",
	name : "ExecMotionNum",
	desc : "客户端->服务端　客户端领取邮件中的附件",
	netID : "954"
},
cfgArr[76] = {
	id : "",
	name : "ExecMotionAckNum",
	desc : "服务端->客户端　服务端回复客户端领取附件的请求",
	netID : "955"
},
cfgArr[77] = {
	id : "",
	name : "ImportantScrollNewsToClientNum",
	desc : "服务端->客户端　服务端向客户端发送超级滚动消息",
	netID : "963"
},
cfgArr[78] = {
	id : "",
	name : "ImportantScrollNewsToClientAckNum",
	desc : "客户端->服务端　客户端接收到超级滚动消息之后回复服务端",
	netID : "964"
},
cfgArr[79] = {
	id : "",
	name : "",
	desc : "",
	netID : ""
},
cfgArr[80] = {
	id : "",
	name : "",
	desc : "",
	netID : ""
},
cfgArr[81] = {
	id : "",
	name : "",
	desc : "",
	netID : ""
},
cfgArr[82] = {
	id : "",
	name : "",
	desc : "",
	netID : ""
},
cfgArr[83] = {
	id : "",
	name : "",
	desc : "",
	netID : ""
},
cfgArr[84] = {
	id : "",
	name : "",
	desc : "",
	netID : ""
},

module.exports = cfgArr;