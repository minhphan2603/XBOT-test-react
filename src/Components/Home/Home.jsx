import React, { Component } from "react";
import Log from "../Log/Log";
import Summary from "../Summary/Summary";
import { connect } from "react-redux";
import { updateDataAction } from "../../Store/Action/updateDataAction";

class Home extends Component {
  render() {
    const { updateData } = this.props;
    setInterval(updateData, 2000);
    return (
      <div className="row m-0 p-0">
        <div className="col-6">
          <Log />
        </div>
        <div className="col-6">
          <Summary />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateData: () => dispatch(updateDataAction)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
