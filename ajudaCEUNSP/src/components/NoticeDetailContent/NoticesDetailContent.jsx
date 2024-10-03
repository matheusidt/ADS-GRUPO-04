import React from "react";
import "./NoticeDetailContent.css";
import { Link } from "react-router-dom";
const NoticesDetailContent = () => {
  return (
    <div className="notice-detail">
      <table className="notice-header">
        <tbody>
          <tr>
            <td>30/03</td>
            <td>Não haverá aula no dia de hoje</td>
            <td>Carlos Henrique</td>
          </tr>
        </tbody>
      </table>

      <div className="notice-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore
          at mollitia aliquid itaque odio doloribus quod.
          rerum!
        </p>
      </div>

      <div className="notice-footer">
        <Link to="/">
          <button className="back-button">VOLTAR</button>
        </Link>
      </div>
    </div>
  );
};

export default NoticesDetailContent;
