export interface Wallpaper {
  url: string;
  name: string;
}
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
export function useWallpapers():Wallpaper[] {
    const wallpapers=[
    {
        url:"https://ideogram.ai/assets/image/lossless/response/emq4cQaSSJCXE0Fey1X3HA",
        name:"WebDevGuides"
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/sjmQFeb4Rn-9UFc-hBi9Lw",
      name: "Heritage",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/-J1sktWMSA6CF2cdOQWsoA",
      name: "Late night",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/dWNLsKgiQaC-XhOJP49MXw",
      name: "Monkey Sitting Beside Fire",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/YJSS3lweTvmjELR9BFGHgA",
      name: "Samurai",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/hgEJ1WywRtOyWZr2S5mRwA",
      name: "Snake",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/xI2QFYkhQD2JlNgf9LROFg",
      name: "Sunset",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/yz4Hm4GSS5WzDik-zHZVlQ",
      name: "Beautiful Girl",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/uQKKueaiQSmwMqd828jgPg",
      name: "Fictional Character",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/kZsLY4iQTtWuzrBSbETjvA",
      name: "Mask",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/edSEcdRlRbynkTGaCS5-LQ",
      name: "Pretty Girl",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/zTz7LBQ2QFSOtgHcEHBjJQ",
      name: "Lion",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/2EGYsYauRxm5UOJ26svZ1w",
      name: "Skeleton Skater",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/jH610wouT4if2kkkHdSWnA",
      name: "Beach",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/o3TVQ1HUTgmuMWLmeiSuZw",
      name: "Sad Boy",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/c5dTjDoFRgOjiLZi32fFaQ",
      name: "Mountain",
    },
  ];
  return shuffleArray(wallpapers);
}
