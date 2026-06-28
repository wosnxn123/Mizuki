import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "绯梦雪Snowflake",
	bio: "一个漂浮在幻想之海的孤独岛屿。这里没有喧嚣，只有风的声音和星辰的低语。我在这里记录梦的残骸，描绘不存在的风景，分享触动灵魂的旋律与故事。",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/367174128",
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/wosnxn123",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/wosnxn123",
		},
		{
			name: "QQ",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com/q/fPoOWUj6J",
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:3467220367@qq.com",
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.gg/V2jJSuZ6Qv",
		},
	],
};
