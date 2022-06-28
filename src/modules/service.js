import regeneratorRuntime from "regenerator-runtime";


const MESSAGES_URL = 'https://jmessages.herokuapp.com/api/message';

const getResource = async (url) =>{
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Error code/////// ${res.status}`);
    }

    return res.json();
}

const postResource = async (url, sendData) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(sendData)
    }

    const res = await fetch(url, options);

    if(!res.ok){
        throw new Error(`Error code/////// ${res.status}`);
    }

    return res.json();
}

const getMessages = async (id=1) =>{
    const res = await getResource(`${MESSAGES_URL}?id=${id}`);
    return res;
}

const postMessage = async (event, userId=1) => {
    event.preventDefault()
    const inputMessage = document.querySelector('.chat-footer form').elements[1];
    const currentDate = new Date();

    const send = {
        date_send: currentDate.getHours() + ":" + currentDate.getMinutes(),
        content: inputMessage.value,
        user_id: userId
    }

    const res = await postResource(MESSAGES_URL, send)
    return res;
}



export {getMessages, postMessage}