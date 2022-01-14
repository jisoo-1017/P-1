import addBtn from "./makeBtn.js";

const $ = document;
var head = $.createElement("div");
head.id = "head";

export default function HEAD(root){
    root.append(head);
}

addBtn(head);