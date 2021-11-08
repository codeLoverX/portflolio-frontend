import React from "react";
import { baseURL } from "../../../apis/serverApi";
import { convertDate } from "../../../shared/convertDate";
function Table({
  title,
  tableData,
  headerText,
  headerProprities,
}) {
  const dataRows = tableData.map((data) => {
    return (
      <tr className="p-4" key={data._id}>
        {headerProprities.map((prop, index) => {
          return (
            <td key={prop}>
              {(prop === "startDate" || prop === "endDate") &&
                convertDate(data[prop])}
              {prop === "projectImage" && (
                <img
                  src={baseURL + '/uploads/projects/' + data[prop]}
                  alt="project"
                  width="150px"
                />
              )}
              {!(
                prop === "startDate" ||
                prop === "endDate" ||
                prop === "projectImage"
              ) && data[prop]}
            </td>
          );
        })}
       
      </tr>
    );
  });

  const headersRow = headerText.map((head, index) => {
    return (
      <th key={index} scope="col">
        {head}
      </th>
    );
  });

  return (
    <div>
      <div className="d-flex justify-content-end mt-5 me-5">
        <h3 className="me-auto">{title}</h3>
      </div>

      <div className="row mt-5">
        <table className="table table-secondary table-striped ">
          <thead>
            <tr>
              {headersRow}
            </tr>
          </thead>
          <tbody>{dataRows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
