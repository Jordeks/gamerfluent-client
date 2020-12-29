const NewsCard = (props) => {
    const { title, content, username } = props
    return (
        <>
            <h1>{ title }</h1>
            <h4>By: { username }</h4>
            <p>{ content }</p>
        </>
    )
}

export default NewsCard