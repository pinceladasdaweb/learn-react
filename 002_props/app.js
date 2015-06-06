'use strict';

var Hello = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name} by React!</h1>;
    }
});