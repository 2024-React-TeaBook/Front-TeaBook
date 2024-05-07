import './footer.css'
import ManagerInfoItem from './managerInfoItem';

const Footer = () => {
    const logoImg = `${process.env.PUBLIC_URL}/img/logo/logo-white.png`;
    return (
        <div className="top footerTop">
            <footer>
                <div className='mirim-info-container'>
                    <img src={logoImg} alt="logo" className="logo" />
                    <div>미림마이스터고등학교 | 서울시 관악구 호암로 546 &#40;신림동&#41;</div>
                    <div className='mirim-sub-info'>
                        <span>02-872-4071</span>
                        <span>e-mirim.hs.kr</span>
                    </div>
                </div>
                <div className='manager-info-container'>
                    <div className='manager-info'>
                        <div>Copyright 2022. 다독 inc. all rights reserved.</div>
                    </div>
                    <ManagerInfoItem name="오수빈" email="w2208@e-mirim.hs.kr" tel="010-3825-5546" github="w2208hd" />
                    <ManagerInfoItem name="황슬기" email="w2236@e-mirim.hs.kr" tel="010-9161-0601" github="sg-hwang-333" />
                </div>
            </footer>
        </div>
    )
}

export default Footer;