import { imagesPNG } from "./images";

interface ICardData {
    img: string,
    title: string,
    desc: string,
    hashtag: { title: string }[],
}

export const cardData: ICardData[] = [
    { img: imagesPNG.cardTop, title: "Sunset", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", hashtag: [{ title: "#photography" }, { title: "#travel" }, { title: "#winter" }] },
    { img: imagesPNG.cardTop, title: "The Coldest", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", hashtag: [{ title: "#photography" }, { title: "#travel" }, { title: "#winter" }] },
    { img: imagesPNG.cardTop, title: "Coldest ", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", hashtag: [{ title: "#photography" }, { title: "#travel" }, { title: "#winter" }] },
    { img: imagesPNG.cardTop, title: "The Coldest Sunset", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", hashtag: [{ title: "#photography" }, { title: "#travel" }, { title: "#winter" }] },
    { img: imagesPNG.cardTop, title: "Sunset", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", hashtag: [{ title: "#photography" }, { title: "#travel" }, { title: "#winter" }] },
    { img: imagesPNG.cardTop, title: "The Coldest", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", hashtag: [{ title: "#photography" }, { title: "#travel" }, { title: "#winter" }] },
    { img: imagesPNG.cardTop, title: "The Sunset", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", hashtag: [{ title: "#photography" }, { title: "#travel" }, { title: "#winter" }] },
    { img: imagesPNG.cardTop, title: "The Coldest Sunset", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", hashtag: [{ title: "#photography" }, { title: "#travel" }, { title: "#winter" }] },
]