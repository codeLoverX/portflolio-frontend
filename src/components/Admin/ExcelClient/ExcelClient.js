import React from 'react';
import { baseURL } from "../../../apis/serverApi";

export default function ExcelClient({ onChangeEvent, onSubmitEvent, fileDir }) {
  return (
    <>

      <div className="text-left alert alert-warning my-2 my-2 alert-light" style={{ marginLeft: "-2px" }}>
        Submit file with .xslx extension and format as this file.
        <a className="text-danger font-italic mx-2" href={`${baseURL}/${fileDir}/excelFile`}>
          Download
        </a>
      </div>
      <div>
        <form onSubmit={onSubmitEvent} encType="multipart/form-data">
        <i className="fa fa-file-excel mt-3 " style={{ color: "green", fontSize: "50px" }} />

          <div className="input-group ">

            <div className="custom-file my-4">

              <input
                type="file"
                name="excelFile"
                accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                onChange={onChangeEvent}
                className="form-control"
              // className="btn btn-success"
              />
            </div>

            <div className="input-group my-2">
              <input type="submit" className="btn btn-secondary" />
            </div>

          </div>
        </form>
      </div>

    </>
  );
}
