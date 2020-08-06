/*
 * Composition vs Inheritance
 * https://reactjs.org/docs/composition-vs-inheritance.html
 * Specialization
 * Sometimes we think about components as being “special cases” of other components.
 * We might say that a WelcomeDialog is a special case of Dialog.
 */

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    );
}

// ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root')
// );
