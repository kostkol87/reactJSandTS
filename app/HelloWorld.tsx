///<reference path="../typings/react/react-global.d.ts"/>


class HelloWorld extends React.Component<any, any> {
    render() {
        return (
            <div>
                Hello World!!! =)
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld/>,
    document.getElementById('app'));