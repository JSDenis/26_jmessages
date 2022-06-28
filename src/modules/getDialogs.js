//http://localhost:3000/data
import { renderCurrentDialogs } from "./dialogs";

const DIALOGS_LIST = 'http://localhost:3000/data';

const getDialogItem = (currentId = 3) => {
    fetch(`${DIALOGS_LIST}/${currentId}`).then(
        res => res.json()
    ).then(
        data => {
            // currentDialog = data;
            renderCurrentDialogs(currentId, data);
        }
    )
}

export default getDialogItem;