import { Capacity } from "./capacity"
import { Cell } from "./cell"
import { Color } from "./color"
import { Description } from "./description"
import { Image } from "./image"

export interface PhoneDetails {
    "id": string; //"apple-iphone-11-128gb-black",
	"namespaceId": string; // "apple-iphone-11",
	"name": string; //"Apple iPhone 11 128GB Black",
	"capacityAvailable": Capacity[]; //["64GB", "128GB", "256GB"],
	"capacity": Capacity; // "128GB",
	"priceRegular": number; // 1100,
	"priceDiscount": number; // 1050,
	"colorsAvailable": Color[]; //["black", "green", "yellow", "white", "purple", "red"],
	"color": Color; // "black",
	"images": Image[]; /**  [
		"img/phones/apple-iphone-11/black/00.jpg",
		"img/phones/apple-iphone-11/black/01.jpg",
		"img/phones/apple-iphone-11/black/02.jpg",
		"img/phones/apple-iphone-11/black/03.jpg",
		"img/phones/apple-iphone-11/black/04.jpg"
	], */
	"description": Description[]; /**  [
		{
			"title": "And then there was Pro",
			"text": [
				"A transformative triple-camera system that adds tons of capability without complexity.",
				"An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
			]
		},
		{
			"title": "Camera",
			"text": [
				"Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
			]
		},
		{
			"title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
			"text": [
				"iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
			]
		}
	], */
	"screen": string; // "6.1' IPS",
	"resolution": string; //  "1792x828",
	"processor": string; // "Apple A13 Bionic",
	"ram": string; // "4GB",
	"camera": string; // "12 Mp + 12 Mp + 12MP",
	"zoom": string; // "Digital, 5x",
	"cell": Cell[]; // ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
}