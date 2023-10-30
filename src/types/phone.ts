import { Color } from "./color";
import { Image } from "./image";
import { Price } from "./price";

export interface Phone {
    "id": number; // 1
    "category": string; // "phones"
    "phoneId": string; // "apple-iphone-11-128gb-black",
    "itemId": string; // "apple-iphone-11-128gb-black",
    "name": string; // "Apple iPhone 11 128GB Black",
    "fullPrice": number; // 1100,
    "price": number; // 1050,
    "screen":string; // "6.1' IPS",
    "capacity": string; // "128GB",
    "color": Color; // "black",
    "ram": string; //"4GB",
    "year": number; // 2019,
    "image": Image; //"img/phones/apple-iphone-11/black/00.jpg"
}