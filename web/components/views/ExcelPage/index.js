import React from "react";
import PropTypes from "prop-types";

import { Table } from "@/components/commons";

function ExcelPage(props) {
  const { data, columns } = props;
  return (
    <div className="table-responsive" style={{ height: 500 }}>
      <Table columns={columns} data={data} />
    </div>
  );
}

ExcelPage.propTypes = {
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object)
  ]).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ExcelPage;
