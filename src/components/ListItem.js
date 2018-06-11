import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { CardSection } from "./common";

import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends Component {
  render() {
    console.log(this.props);
    return (
      <CardSection>
        <Text style={styles.title}>{this.props.data.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
};

export default connect(
  null,
  actions
)(ListItem);
