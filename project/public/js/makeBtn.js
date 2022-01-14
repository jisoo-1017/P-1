import moveTotile from "./moveTotitle.js";

const $ = document;
let check = false;

function makeBtn(tilte){
    const button = $.createElement('div');
    button.innerHTML = tilte;
    button.id = tilte;
    return button;
}

const menu = makeBtn("menu");
const ajoumemo = makeBtn("AJOUMemo");
const login = makeBtn("login");


menu.addEventListener('click', function(){
    if(!check){
        $.getElementById('sidemenu').style.left=0;
        check=true;
    }else{
        $.getElementById('sidemenu').style.left="-178px";
        check=false;
    }
})

ajoumemo.addEventListener('click', () => moveTotile($.getElementById('root'), ajoumemo.id));

export default function addBtn(root){
    root.append(menu, ajoumemo, login);
}

