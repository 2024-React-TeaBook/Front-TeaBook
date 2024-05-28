import './tea.css';

const Tea = ({themeStyle}) => {
    return (
        <div className="teaBook-container tea-container">
            <div className='teaBook-title-container tea-title'>
                <div>This kind of tea suits the book</div>
                <div>이런 차와 어울려요</div>
            </div>
            <div className='tea'>
                <div className='tea-div'>
                    <h3>홍차</h3>
                    <h4>#상쾌 #향긋 #씁쓸 #허브</h4>
                    <p>세</p>
                </div>
                <div className='tea-div'>
                    
                </div>
                <div className='tea-div'>
                    
                </div>
            </div>

        </div>
    )
}

export default Tea;