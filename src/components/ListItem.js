import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager
} from "react-native";
import { CardSection } from "./common";

import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends Component {
  componentWillMount() {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { data, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.description}>{data.description}</Text>
        </CardSection>
      );
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
    paddingLeft: 18,
    fontSize: 20,
    fontWeight: "bold"
  },
  description: {
    flex: 1,
    paddingHorizontal: 18
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
