import React, { Component } from "react";
import Origam from '../origam'
import styles from "./index.module.css";

class Origamis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origamis: [],
    };
  }

  getOrigamis = async () => {
    const promise = await fetch("http://localhost:9999/api/origami");
    const origamis = await promise.json();
    this.setState({
      origamis,
    });
  };

  componentDidMount() {
    this.getOrigamis();
  }

  renderOrigamis = () => {
    const { origamis } = this.state;
    return (
      <div className={styles["origamis-wrapper"]}>
        {origamis.map((origam) => {
          return(
              <Origam key={origam._id} {...origam}/>
          )
        })}
      </div>
    );
  };

  render() {


    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Origamis</h1>
        {this.renderOrigamis()}
      </div>
    );
  }
}

export default Origamis;
