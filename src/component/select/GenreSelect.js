import './select.css';
import genreJsonInfo from '../../json/genreJsonInfo';

const GenreSelect = function ({ genreName, setTheme }) {
    return (
        <div className="genre-div" onClick={() => {setTheme(genreName)}}>
            <div className="hover-div">
                <div className="hover-text-div">
                    <div className="hover-text">
                        View Info
                    </div>
                </div>
            </div>
            <div className="genre-div-1" style={{
                background: `url('img/select/genre-${genreName}.png') no-repeat center`,
                backgroundSize: "cover"
            }}></div>
            <div className="genre-div-2">
                <div className="genre-text">
                    <h1 className="genre-text-1">{genreJsonInfo[genreName].title}</h1>
                    <h3 className="genre-text-2">{
                        genreJsonInfo[genreName].hashtag.map((e) => {
                            return `#${e} `;
                        })
                    }</h3>
                </div>
            </div>
        </div>
    )
}

export default GenreSelect;
