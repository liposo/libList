import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./common";

import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends Component {
  renderDescription() {
    const { data, expanded } = this.props;
    if (expanded) {
      return <Text>{data.description}</Text>;
    }
  }

  render() {
    const { title, id } = this.props.data;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.title}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.data.id;
  return {
    expanded
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
