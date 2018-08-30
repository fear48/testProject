import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "#fff" }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Username:</Text>
          <Text style={{ marginBottom: 10 }}>
            {this.props.currentElement.username}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            First Last name:
          </Text>
          <Text style={{ marginBottom: 10 }}>
            {this.props.currentElement.name}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Phone:</Text>
          <Text style={{ marginBottom: 10 }}>
            {this.props.currentElement.phone}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Website:</Text>
          <Text style={{ marginBottom: 10 }}>
            {this.props.currentElement.website}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => ({
  currentElement: state.root.currentElement
});

export default connect(mapStateToProps)(ProfilePage);
