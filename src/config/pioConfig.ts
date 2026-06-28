import type { PioConfig } from "../types/config";

// Pio 看板娘配置
export const pioConfig: PioConfig = {
	enable: true, // 启用看板娘
	models: ["/pio/models/NOIR/noir.model3.json"], // 默认模型路径
	position: "left", // 模型位置
	width: 280, // 默认宽度
	height: 250, // 默认高度
	mode: "draggable", // 默认为可拖拽模式
	hiddenOnMobile: false, // 默认在移动设备上隐藏
	hideAboutMenu: false, // 隐藏内置 About 菜单按钮
	dialog: {
		welcome: "欢迎来到绯梦霞间!", // 欢迎词
		touch: [
			"你在做什么？",
			"别碰我！",
			"HENTAI!",
			"别那样欺负我！",
		], // 触摸提示
		home: "点击此处返回首页！", // 首页提示
		skin: ["想看看我的新装扮吗？", "新装扮看起来真棒~"], // 换装提示
		close: "QWQ 下次见~", // 关闭提示
		link: "https://github.com/wosnxn123/Mizuki", // 关于链接
	},
};
