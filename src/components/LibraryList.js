import React, { Component } from "react";
import { Text, FlatList } from "react-native";
import ListItem from "./ListItem";
import { connect } from "react-redux";

class LibraryList extends Component {
  renderItem({ item }) {
    return <ListItem data={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries} // pass in the data you want rendered
        renderItem={this.renderItem} // Dictate how each item is rendered
        keyExtractor={item => item.id.toString()} // Sets a key, or you'll get a warning
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};

//Connect returns a function and immediately call that returned function with the LibraryList
export default connect(mapStateToProps)(LibraryList);
