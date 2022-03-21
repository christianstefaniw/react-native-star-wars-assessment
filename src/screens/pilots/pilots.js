import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

import { getStarships } from "../../services/starships/actions";

class Pilots extends React.Component {
    componentDidMount() {
        this.props.getShips();
    }

    render() {
        return (
            <></>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getShips: () => dispatch(getStarships()),
    };
};

const mapStateToProp = state => {
    return {
        error: state.ships.error,
        ships: state.ships.allShips
    };
}

export default connect(mapStateToProp, mapDispatchToProps)(Pilots);