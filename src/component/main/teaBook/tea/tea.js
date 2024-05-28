import './tea.css';
import teaBookInfo from '../../../../json/teaBookJsonInfo';


const Tea = ({ themeStyle }) => {
    return (
        <div className="teaBook-container tea-container">
            <div className='teaBook-title-container tea-title'>
                <div>This kind of tea suits the book</div>
                <div>이런 차와 어울려요</div>
            </div>
            <div className='tea'>
                {/* 이런 식으로 스타일 바꾸기 */}
                {/* <div className={`tea-div ${themeStyle}-color`}></div> */}

                {
                    teaBookInfo[themeStyle].teaName.map((_, idx) => {
                        return (
                            <div className='tea-div' style={{
                                backgroundImage: `url('img/genre/tea/${themeStyle}/${idx + 1}.png')`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                filter: "brightness(70%)"
                            }}>
                                <div>{teaBookInfo[themeStyle].teaName[idx]}</div>
                                <div>{teaBookInfo[themeStyle].teaHashtag[idx].map(e => { return `#${e} ` })}</div>
                                <div>{teaBookInfo[themeStyle].teaContent[idx].split('\n').map(e => {
                                    return <div>{e}</div>
                                })}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Tea;