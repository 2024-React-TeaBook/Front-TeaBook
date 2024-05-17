import './select.css'
import GenreSelect from "./GenreSelect";

const Select = function () {
    return (
        <div>
            <div id="select_" className="select-div">
                <div className="select-title">
                    <div className="line-div" id="line-div-1"></div>
                    <div className="select-title-text">
                        <h4 className="select-eng-text">Select Genre</h4>
                        <h1 className="select-han-text">장르를 골라보세요</h1>
                    </div>
                    <div className="line-div" id="line-div-2"></div>
                </div>

                <div className="select-genre-div-parent">
                    <div className="select-genre-div">

                        <GenreSelect genreName="romance" />
                        <GenreSelect genreName="horror" />
                        <GenreSelect genreName="sf" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Select;