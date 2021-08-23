function Divider(props) {
    const { className } = props
    return (
        <div className={"base--divider" + (className ? " " + className : "")} />
    )
}

export default Divider