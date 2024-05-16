import './book.css'
import teaBookInfo from '../../../../json/teaBookJsonInfo';

const Book = ({ themeStyle }) => {
    return (
        <div className="teaBook-container book-container">
            <div className='teaBook-title-container book-title'>
                <div>There's a book like this</div>
                <div>이런 책이 있어요</div>
            </div>
            <div className='book'>
                {
                    teaBookInfo[themeStyle].bookTitle.map((_, idx) => {
                        const imgSrc = `${process.env.PUBLIC_URL}/img/genre/book/${themeStyle}/${idx + 1}.jpg`;
                        return (
                            <div className='book-info-container'>
                                <img src={`${imgSrc}`} className='book-img' alt='bookImg'></img>
                                <div className='book-text-info'>
                                    <div>{teaBookInfo[themeStyle].bookTitle[idx]}</div>
                                    <div>{teaBookInfo[themeStyle].bookAuthor[idx]}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )

}
export default Book;