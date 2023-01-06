import './Questions.css';
import {Question} from "./Question";
import {images1, images2, images3, images4, images5} from "./images";

export function Questions() {

    function showResult(e) {
        e.preventDefault();

    }

    return (
        <div className="questions">
            <Question question="#1 Weli Musig loschi du am liebschte?" images={images1}/>
            <Question question="#2 Stell dr vor du gosch and Ostschwizer Fasnacht, was füre Gosdym ziesch ah?"
                      images={images2}/>
            <Question question="#3 Ind Ferie gang ich am liebschte..." images={images3}/>
            <Question question="#4 Ich bi e Gourmet und iss am liebschte..." images={images4}/>
            <Question question="#5 Drzue dringg ich am liebschte.." images={images5}/>
            <div>
                <button onClick={showResult}>
                    Resultat
                </button>
            </div>
        </div>
    );
}
