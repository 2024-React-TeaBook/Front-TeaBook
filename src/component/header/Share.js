import React from 'react';


const Share = () => {


    const url = encodeURI(window.location.href);

    const copyUrl = async () => {
        await navigator.clipboard.writeText(url);
        alert("URL이 복사되었습니다");
    };

    if (window.Kakao) { 
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) kakao.init(process.env.REACT_APP_VITE_KAKAO_API_KEY)
    }

    const shareFacebook = () => {
        window.open('http://www.facebook.com/sharer.php?u=' + url);
    }

    const shareKakao = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '다독',
                description: '책과 차의 만남이 이루어지다',
                imageUrl: 'https://img.freepik.com/free-photo/books-arrangement-with-cup-of-cofee_23-2148851107.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1710288000&semt=ais',
                link: {
                    webUrl: url,
                    mobileWebUrl: url,
                },
            },
            buttons: [
                {
                    title: '웹으로 이동',
                    link: {
                        webUrl: url,
                        mobileWebUrl: url,
                    },
                },
            ]
        })
    }
    const shareTwitter = () => {
        window.open("https://twitter.com/intent/tweet?&url=" + url)
    }

    return (
        <div className={'share-container'}>
            <img onClick={() => copyUrl()} src={'img/header/icon-share/share.svg'} alt={'share url'} />
            <img onClick={() => shareFacebook()} src={'img/header/icon-share/facebook.svg'} alt={'share instagram'} />
            <img onClick={() => shareKakao()} src={'img/header/icon-share/kakaotalk.svg'} alt={'share kakaotalk'} />
            <img onClick={() => shareTwitter()} src={'img/header/icon-share/twitter.svg'} alt={'share twitter'} />
        </div>
    )
}

export default Share;