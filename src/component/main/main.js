import Genre from './genre/genre.js'
import TeaBook from './teaBook/teaBook.js'

const Main = ({ themeStyle, currentImage, handleToggle, isPlaying }) => {
    return (
        <div className='top'>
            <Genre themeStyle={themeStyle} currentImage={currentImage} handleToggle={handleToggle} isPlaying={isPlaying}/>
            <TeaBook themeStyle={themeStyle}/>
        </div>
    )
}

export default Main;