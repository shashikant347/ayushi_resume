import ITEMS from "./items.json";

export { ITEMS };

export const CATS = [
  ["all", "All"],
  ["poster", "Posters & Creatives"],
  ["video", "Videos"],
  ["campaign", "Ad Campaigns"],
  ["report", "Reports"],
];

export const LAB = { poster: "Creative", video: "Video", campaign: "Ads", report: "Report" };

export const ROLES = [
  "SEO Specialist",
  "Social Media Manager",
  "Meta & Google Ads",
  "Content with AI tools",
  "Analytics & Reporting",
];

export const SKILLS_MARQUEE = [
  "SEO", "Technical SEO", "Backlinks", "Keyword Research", "Google Ads", "Meta Ads",
  "Social Media Marketing", "Content Marketing", "Generative AI Tools", "Google Analytics",
  "Competitor Analysis", "Performance Reporting", "Canva", "Email Marketing",
];

export const SKILL_CARDS = [
  ["🔍", "SEO", "Keyword research, on-page fixes, technical checks and backlinks that move rankings."],
  ["🎯", "Google Ads", "Search and Display campaigns, set up, targeted and tuned over time."],
  ["📣", "Meta Ads", "Facebook and Instagram ads aimed at the right audience for leads."],
  ["📱", "Social Media", "Daily content and community replies across six platforms."],
  ["✨", "AI Content", "Banners, videos and articles produced faster with generative AI."],
  ["📊", "Analytics", "Weekly reports, trackers and competitor checks built on Google Analytics."],
];

const FB = "https://www.facebook.com/share/";

export const LINK_GROUPS = [
  ["🛵", "OTP-EV", "Facebook page", ["https://www.facebook.com/profile.php?id=61594201352583"]],
  ["🏡", "Green Vista work", "Facebook posts", [FB + "p/1DnekyNbJ5/", FB + "p/1Ek9sXKA1p/", FB + "p/1JhVQYkEaY/", FB + "p/1Btvz6J78d/"]],
  ["🎬", "Corporates Group videos", "Reels and posts", [FB + "r/1HKiuHyquv/", FB + "r/1GkNPPXjgp/", FB + "r/1dooiDWHAd/", FB + "p/1LadEmF6TV/"]],
  ["🎥", "Agency sample video", "Facebook reel", ["https://www.facebook.com/reel/1123732940340663"]],
  ["💇", "Indique Hair work", "Instagram and Facebook", ["https://www.instagram.com/josmorgan1717/", FB + "r/1GHi2QFFRw/", FB + "p/1EzaP2ejB3/", FB + "r/1Er7L3A1oz/", FB + "p/1EvbTSWWB9/", FB + "p/1DdRK1FpH3/"]],
  ["🖼️", "Indique infographics", "Shared across blogs, photo and pin sites", [
    "https://www.stylevore.com/chic-and-stylish-short-curly-hair/",
    "https://www.flickr.com/photos/curlyhair_/54631910021/",
    "https://padlet.com/livelikealex18_/my-brilliant-padlet-mwrcnowvr7aftkno/wish/v3w8ZwG0OAXxZN52",
    "https://padlet.com/rachelgilbert842_/my-funky-padlet-dfdepeyr8fk75wle/wish/mDRxWB7Ezzbwajb1",
    "https://www.deviantart.com/annieforbes11/art/Closure-Hair-Piece-for-a-Seamless-Natural-Finish-1274411985",
    "https://www.deviantart.com/annieforbes11/art/Sleek-Frontal-Ponytail-Perfection-1089650479",
    "https://www.flickr.com/photos/curlyhair_/54993518359/",
    "https://www.flickr.com/photos/curlyhair_/54961255755/",
    "https://www.flickr.com/photos/curlyhair_/54660341473/",
    "https://padlet.com/livelikealex18_/my-brilliant-padlet-mwrcnowvr7aftkno/wish/jpoxaj497glOZbPE",
  ]],
  ["✨", "Indique GIFs", "Animated posts on GIPHY", [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW5vcmp3bXh6NmxzNXF5bWlsNHU5dGNjY29wNnJqeHFtNmh3c21sMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qt1m5ZB84YkbDAA7kr/giphy.gif",
    "https://giphy.com/gifs/indique-hair-raw-win-3k-OplrPMGdwqXoiKnmwL",
    "https://giphy.com/gifs/sale-hair-extensions-hairsale-j6gUbrPiZBYk0FVmjm",
    "https://giphy.com/gifs/giveaway-alert-3k-dnKQO5GYxkIN4hfwiH",
  ]],
];

export function linkKind(u) {
  return /facebook\.com\/(share\/r|reel)/.test(u) ? "Facebook reel"
    : /facebook\.com\/share\/p/.test(u) ? "Facebook post"
    : /facebook\.com\/profile/.test(u) ? "Facebook page"
    : /instagram/.test(u) ? "Instagram profile"
    : /stylevore/.test(u) ? "Stylevore article"
    : /flickr/.test(u) ? "Flickr photo"
    : /padlet/.test(u) ? "Padlet post"
    : /deviantart/.test(u) ? "DeviantArt post"
    : "GIPHY GIF";
}
