import './genre.css'
import genreJsonInfo from '../../../json/genreJsonInfo';

const Genre = ({ themeStyle }) => {
    return (
        <div className='genre-conatainer'>
            <div className='genre-img-container' style={{
                background: `url('img/genre/genrebg-${themeStyle}.png') no-repeat center`
            }}></div>

            <div className='genre-text-container'>
                <div>
                    <div className='genre-hashTag'>
                        {genreJsonInfo[themeStyle].hashtag.map(tag => {
                            return `#${tag} `;
                        })}
                    </div>
                    <div className='genre-title'>{genreJsonInfo[themeStyle].korTitle}</div>
                    <div className='genre-content'>
                        {genreJsonInfo[themeStyle].content.map(cont => {
                            return (
                                <>
                                    {cont}
                                    <br></br>
                                </>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Genre;