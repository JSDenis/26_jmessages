import switchBackground from "./modules/switcherTheme";
import { openCurrentDialog } from "./modules/dialogs";
import postMessageItem from "./modules/postDialogs";

import "./scss/main.scss";



let switcherTheme = document.querySelector('#theme-switcher');
switcherTheme.addEventListener('click', switchBackground);


const dialogsBox = document.querySelector('#all-dialogs');
dialogsBox.addEventListener('click', openCurrentDialog);


const sendMessageBtn = document.querySelector('.form-buttons').children[2];
sendMessageBtn.addEventListener('click', postMessageItem)
