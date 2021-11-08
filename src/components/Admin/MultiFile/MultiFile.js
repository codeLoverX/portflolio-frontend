import React from 'react';
import { baseURL } from "../../../apis/serverApi";

export default function Multifile({ onChangeEvent, onSubmitEvent, fileDir }) {
    return (
        <>
            <div className="text-left alert alert-warning my-2 my-2 alert-light" style={{ marginLeft: "-2px" }}>
                Submit file with .xslx extension and format as this file.
                <a className="text-warning" href={`${baseURL}/${fileDir}/excelFile`}>
                    <span> Download</span>
                </a>
            </div>
            <div>
                <i className="fa fa-file-excel my-2" style={{ color: "green", fontSize: "50px" }} />

            </div>

            <form onSubmit={onSubmitEvent} encType="multipart/form-data">
                <div className="custom-file my-3">
                    <input
                        type="file"
                        name="excelFile"
                        accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        onChange={onChangeEvent}
                        className="form-control"
                    // className="btn btn-success"
                    />
                </div>

                <div>
                    <i className="fas fa-image my-2" style={{ color: "green", fontSize: "50px" }} />
                    <span> Upload images</span>
                </div>

                <div className="custom-file my-3">
                    <input
                        type="file"
                        multiple
                        name="imageFile"
                        accept=".png, .jpg, .jpeg"
                        onChange={onChangeEvent}
                        className="form-control"
                    // className="btn btn-success"
                    />
                </div>

                <div className="input-group my-3">
                    <input type="submit" className="btn btn-secondary" />
                </div>

            </form>
        </>
    );
}
