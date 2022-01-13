const $ = document;
var head = $.createElement("div");
head.id = "head";

export default function HEAD(root){
    root.append(head);
}