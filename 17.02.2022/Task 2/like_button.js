'use strict'

const e = React.createElement
class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { liked: false }
    }
    render() {
        if (this.state.liked) {
            return this.props.text
        }
        return e(
            "button",
            { onClick: () => this.setState({ liked: true }) },
            this.props.name
        )
    }
}
document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        const name = domContainer.dataset.name;
        const text = domContainer.dataset.text;
        ReactDOM.render(
            e(LikeButton, { name: name, text: text }), domContainer
        )
    });