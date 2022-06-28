import regeneratorRuntime from "regenerator-runtime";
import getDialogItem from "./getDialogs";
import { getMessages } from "./service";

const openCurrentDialog = (e) => {
    const targetEl = e.target;
    const prevActiveDialog = document.querySelector('.open-chat');
    const dialogElem = targetEl.closest('.dialogs-item');
    if(!!dialogElem && dialogElem !== prevActiveDialog){
        const currentDialogId = Number(dialogElem.dataset.dialogId);

        dialogElem.classList.add('open-chat');
        prevActiveDialog.classList.remove('open-chat');

        getDialogItem(currentDialogId);
    }
} 


const renderCurrentDialogs = async (dialogId = 3, currentDialog) => {
    const data1 = await getMessages(1);
    const data2 = await getMessages(2);
    console.log(data1, data2);

    
    const currentMessages1 = data1.map(item => {
        return {
            author: 'SuperUser',
            date: item.date_send,
            text: item.content
        }
    });

    const currentMessages2 = data2.map(item => {
        return {
            author: 'David Bobs',
            date: item.date_send,
            text: item.content
        }
    });

    const currentMessages = [...currentMessages1, ...currentMessages2].sort((a, b) =>{
        if(a.date < b.date) return -1;
        if(a.date > b.date) return 1;
        return 0;
    } );
    

    const bodyMessages = document.querySelector('.messages');

    // const currentDialog = dialogsItems.find((item) => item.dialogId === dialogId);
    //*const currentMessages = currentDialog.messages;*/
    console.log(currentDialog.messages, currentMessages1, currentMessages2, currentMessages);

    bodyMessages.innerHTML = '';
    currentMessages.forEach(message => {
        bodyMessages.innerHTML += `
        <div class="message-item ${message.author === 'SuperUser' ? 'outgoing-message' : ''} ">
            <div class="message-avatar">
                <figure class="avatar">
                    <img src="images/user2.png" class="rounded-circle" alt="image">
                </figure>
                <div>
                    <h5>${message.author}</h5>
                    <div class="time">${message.date}</div>
                </div>
            </div>
            <div class="message-content">
                ${message.text}
            </div>
        </div>
        `
    })
}

export {openCurrentDialog, renderCurrentDialogs};