export default function moveTotile(root, title){
    history.pushState(null,null,`/${title}`);
    switch(title){
        case '자유게시판':
            break;
        case '비밀게시판':
            break;
        case '정보게시판':
            break;
        case '홍보게시판':
            break;
        case 'SW게시판':
            break;
        case 'login':
            break;
        case 'AJOUMemo':
            break;
    }
}