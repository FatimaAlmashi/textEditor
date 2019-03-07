import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    text_color: "black",
    text_weight: "",
    text_style: "",
    text_underline: ""
  };
  setColor = color => {
    this.setState({ text_color: color });
  };
  setWeight = () => {
    if (this.state.text_weight === "") {
      this.setState({ text_weight: "bold" });
    } else {
      this.setState({ text_weight: "" });
    }
  };
  setStyle = () => {
    if (this.state.text_style === "") {
      this.setState({ text_style: "italic" });
    } else {
      this.setState({ text_style: "" });
    }
  };
  setUnderline = () => {
    if (this.state.text_underline === "") {
      this.setState({ text_underline: "underline" });
    } else {
      this.setState({ text_underline: "" });
    }
  };
  getFullStyle = () => {};

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => {
            switch (style) {
              case "bold": {
                this.setWeight();
                break;
              }
              case "italic": {
                this.setStyle();
                break;
              }
              default: {
                this.setUnderline();
                break;
              }
            }
          }}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => {
            this.setColor(color);
          }}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.text_color,
            fontStyle: this.state.text_style,
            fontWeight: this.state.text_weight,
            textDecorationLine: this.state.text_underline
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
