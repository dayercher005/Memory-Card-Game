import "../styles/Title.css"

export default Title

function Title() {

    const TitleName = "Pokemon Memory Card Game"

    return (

        <h1 className="titleName">
            {TitleName}
        </h1>
    )
}