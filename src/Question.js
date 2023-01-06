import './Question.css';
import React from "react";

export function Question(props) {
    const [selected, setSelected] = React.useState(-1);

    const images = props.images;
    const question = props.question;

    return (
        <div>
            <h2>{question}</h2>
            <div className="question-choices">
                <div className={`answer ${selected === 0 ? "selected" : ""}`} onClick={() => setSelected(0)}>
                    <img src={images[0].src} alt={images[0].alt}/>
                    <div>{images[0].text}</div>
                </div>
                <div className={`answer ${selected === 1? "selected" : ""}`} onClick={() => setSelected(1)}>
                    <img src={images[1].src} alt={images[1].alt}/>
                    <div>{images[1].text}</div>
                </div>
                <div className={`answer ${selected === 2? "selected" : ""}`} onClick={() => setSelected(2)}>
                    <img src={images[2].src} alt={images[2].alt}/>
                    <div>{images[2].text}</div>
                </div>
                <div className={`answer ${selected === 3? "selected" : ""}`} onClick={() => setSelected(3)}>
                    <img src={images[3].src} alt={images[3].alt}/>
                    <div>{images[3].text}</div>
                </div>
            </div>
        </div>
    );
}
