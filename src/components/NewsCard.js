const NewsCard = (props) => {
    const { title, content, username } = props
    return (
        <>
            <div className='card__side card__side--front'>
                <h1>{ title }</h1> 
                <h4>By: { username }</h4> 
            </div>        
            <div className='card__side card__side--front'>
                <p>{ content }</p>
            </div>
            
        </>
    )
}

export default NewsCard