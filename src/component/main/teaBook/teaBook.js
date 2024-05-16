import './teaBook.css'
import Book from './book/book.js'
import Tea from './tea/tea.js'

const TeaBook = ({ themeStyle }) => {
    return (
        <div>
            <Book themeStyle={themeStyle}/>
            <Tea />
        </div>
    )
}

export default TeaBook;