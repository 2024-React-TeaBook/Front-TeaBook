const ManagerInfoItem = ({ name, email, tel, github }) => {
    return(
        <div className='manager-info'>
            <div>{name}</div>
            <div>{email}</div>
            <div>{tel}</div>
            <div><img src={`${process.env.PUBLIC_URL}/img/footer/github.svg`} className='github-img' alt='github'/>{github}</div>
        </div>
    )
}

export default ManagerInfoItem;