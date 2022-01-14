import SECTION from "./sidemenu.js";

const $ = document
const main_con = $.createElement('div');
main_con.className = "main";

SECTION(main_con);

export default function MAIN(root){
    root.append(main_con);
}
