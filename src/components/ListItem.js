import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./common";

import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends Component {
  render() {
    const { title, id } = this.props.data;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.title}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
