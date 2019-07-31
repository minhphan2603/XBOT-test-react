import React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";

function Summary({ summary }) {
  return (
    <div>
      <h1>Summary</h1>
      <Table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Starting</th>
            <th>Lowest</th>
            <th>Height</th>
            <th>Current</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(summary).map((item, i) => (
            <tr key={i}>
              <td>{item[0]}</td>
              <td>{item[1].starting}</td>
              <td>{item[1].lowest}</td>
              <td>{item[1].heighest}</td>
              <td>{item[1].current}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    summary: state.summary
  };
};

export default connect(
  mapStateToProps,
  null
)(Summary);
