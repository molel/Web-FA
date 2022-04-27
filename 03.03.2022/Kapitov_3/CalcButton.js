'use strict'
const e = React.createElement

class CalcButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return e(
            "button",
            { onClick: () => console.log(123) },
            this.props.name
        )
    }
}
document.querySelectorAll('.button')
    .forEach(domContainer => {
        const name = domContainer.dataset.name;
        ReactDOM.render(
            e(LikeButton, { name: name }), domContainer
        )
    });