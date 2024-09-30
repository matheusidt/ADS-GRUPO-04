import React from "react";
import { Link } from "react-router-dom";
import { notices } from "../data/NoticesData";

const NoticeTable = () => {
  return (
    <table className="notice-table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Aviso</th>
          <th>Remetente</th>
        </tr>
      </thead>
      <tbody>
        {notices.map((notice, index) => (
          <tr key={index}>
            <td>{notice.date}</td>
            <td>
              <Link to={`/OpenWarn/${notice.id}`}>{notice.message}</Link>
            </td>
            <td>{notice.sender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NoticeTable;
