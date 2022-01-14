import moveTotile from "./moveTotitle.js";

const $ = document;
const sidemenu = $.createElement('section');
const menu_list = $.createElement('ul');

sidemenu.id = "sidemenu";
menu_list.id = "menu_list";

sidemenu.appendChild(menu_list);

function makeList(root, title){
    const menu = $.createElement('li');
    menu.className = "item";
    menu.id = title;
    menu.innerHTML=title;
    menu.addEventListener('click', () => moveTotile(root, title));
    root.append(menu);
}

makeList(menu_list,"자유게시판");
makeList(menu_list,"비밀게시판");
makeList(menu_list,"정보게시판");
makeList(menu_list,"홍보게시판");
makeList(menu_list,"SW게시판");

export default function SECTION(root){
    root.append(sidemenu);
}
