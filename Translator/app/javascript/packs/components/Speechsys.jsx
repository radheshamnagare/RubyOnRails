import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'
import "bootstrap/dist/css/bootstrap.min.css"


const Speechsyn = ({ texts }) => {

    const { speak } = useSpeechSynthesis()


    const cancel = () => {
        window.speechSynthesis.cancel();
    }

    return (
        <div className="d-grid gap-2 col-5 mx-auto">
            <br />
            <button className="btn btn-dark btn-sm" type="button" onClick={() => speak({ text: texts })}>Speach</button>
            <button className="btn btn-danger btn-sm" type="button" onClick={() => cancel()}>Stop</button>
        </div>
    )
}
export default Speechsyn