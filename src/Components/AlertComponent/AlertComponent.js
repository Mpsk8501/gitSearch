import React, {useContext} from 'react';
import Alert from '@material-ui/lab/Alert';
import {AlertContext} from "../../context/alert/alertContext";



export default function AlertComponent () {
    const {alert,hide} = useContext(AlertContext);

    if (!alert) return null

    return (
       <Alert
            style={{
                marginTop:30
            }}
            severity={alert.type||"success"}
            onClose={() => {hide()}}>
            {alert.text}
        </Alert>

    );
}