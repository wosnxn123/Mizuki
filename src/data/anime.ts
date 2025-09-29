// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "某科学的超电磁炮",
		status: "watching",
		rating: 9.7,
		cover: "/assets/anime/railgun.webp",
		description: "镇站之番，名不虚传",
		episodes: "24 episodes",
		year: "2009-2020",
		link: "https://www.bilibili.com/bangumi/media/md425",
		genre: ["战斗", "校园"],
		studio: "J.C.STAFF",
		progress: 2,
		totalEpisodes: 24,
		startDate: "0000-00",
		endDate: "0000-00",
	},
	{
		title: "某科学的超电磁炮S",
		status: "watching",
		rating: 9.7,
		cover: "/assets/anime/railgun2.webp",
		description: "后悔没早点看",
		episodes: "24 episodes",
		year: "2009-2020",
		link: "https://www.bilibili.com/bangumi/media/md427",
		genre: ["战斗", "校园"],
		studio: "J.C.STAFF",
		progress: 1,
		totalEpisodes: 24,
		startDate: "0000-00",
		endDate: "0000-00",
	},
	{
		title: "某科学的超电磁炮T",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/railgun3.webp",
		description: "等第四部",
		episodes: "25 episodes",
		year: "2020-2024",
		link: "https://www.bilibili.com/bangumi/media/md28224095",
		genre: ["战斗", "校园"],
		studio: "J.C.STAFF",
		progress: 25,
		totalEpisodes: 25,
		startDate: "0000-00",
		endDate: "0000-00",
	},
];

export default localAnimeList;
