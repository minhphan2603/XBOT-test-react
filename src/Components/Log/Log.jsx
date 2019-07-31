import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { Card, CardText } from "reactstrap";
import { PAUSE_LOG, RESUME_LOG } from "../../Store/constant";

function Log({ isPaused, logArr, pauseLog, resumeLog }) {
  return (
    <div className="m-0">
      <div className="title d-flex justify-content-between">
        <h1>Log</h1>
        <Button onClick={isPaused ? resumeLog : pauseLog}>
          {isPaused ? "Resume Log" : "Pause Log"}
        </Button>
      </div>
      <div className="container" style={{ height: "90vh", overflow: "scroll" }}>
        {logArr.map((log, i) => (
          <Card key={i}>
            <CardText>Update for {log.time.toString()}</CardText>
            <div className="row">
              {log.data.map((item, i) => (
                <CardText key={i} className="col-4">
                  {item.code} : ${item.price}
                </CardText>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isPaused: state.log.isPaused,
    logArr: state.log.logArr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pauseLog: () => dispatch({ type: PAUSE_LOG }),
    resumeLog: () => dispatch({ type: RESUME_LOG })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Log);
