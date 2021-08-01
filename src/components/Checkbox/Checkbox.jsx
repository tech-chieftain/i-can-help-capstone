import { Col, Row } from "antd";
import React, { useState } from "react";

function Checkbox({ checked, label, change }) {
  const [isChecked, setIsChecked] = useState(checked);

  const clickHandler = () => {
    setIsChecked((prev) => !prev);
    change(isChecked);
  };

  return (
    <div
      style={{
        width: "max-content",
        cursor: "pointer",
      }}
      onClick={clickHandler}
    >
      <Row align="top">
        <Col>
          {isChecked ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                fill="#1C1259"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.8777 5.79058C15.0272 5.63389 15.1991 5.55554 15.3935 5.55554C15.5879 5.55554 15.7598 5.63389 15.9093 5.79058C16.0439 5.93161 16.1111 6.10789 16.1111 6.31943C16.1111 6.53097 16.0439 6.70725 15.9093 6.84828L8.75538 14.3931C8.74043 14.4088 8.72548 14.4245 8.71053 14.4402C8.69558 14.4558 8.68062 14.4715 8.66567 14.4872C8.53112 14.6439 8.36292 14.7222 8.16109 14.7222C7.95925 14.7222 7.79106 14.6439 7.6565 14.4872L4.09075 10.7735C3.95619 10.6325 3.88892 10.4562 3.88892 10.2446C3.88892 10.0331 3.95619 9.85682 4.09075 9.7158C4.24026 9.5591 4.41219 9.48076 4.60655 9.48076C4.80091 9.48076 4.97284 9.5591 5.12235 9.7158L8.14987 12.8889L14.8777 5.79058Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z"
                fill="white"
                stroke="#1C1259"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.8777 5.79058C15.0272 5.63389 15.1991 5.55554 15.3935 5.55554C15.5879 5.55554 15.7598 5.63389 15.9093 5.79058C16.0439 5.93161 16.1111 6.10789 16.1111 6.31943C16.1111 6.53097 16.0439 6.70725 15.9093 6.84828L8.75538 14.3931C8.74043 14.4088 8.72548 14.4245 8.71053 14.4402C8.69558 14.4558 8.68062 14.4715 8.66567 14.4872C8.53112 14.6439 8.36292 14.7222 8.16109 14.7222C7.95925 14.7222 7.79106 14.6439 7.6565 14.4872L4.09075 10.7735C3.95619 10.6325 3.88892 10.4562 3.88892 10.2446C3.88892 10.0331 3.95619 9.85682 4.09075 9.7158C4.24026 9.5591 4.41219 9.48076 4.60655 9.48076C4.80091 9.48076 4.97284 9.5591 5.12235 9.7158L8.14987 12.8889L14.8777 5.79058Z"
                fill="white"
              />
            </svg>
          )}
        </Col>

        <Col style={{ marginLeft: "5px" }}>
          <p
            style={{
              fontSize: "16px",
              fontFamily: "roboto",
              fontWeight: "400",
            }}
          >
            {label}
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default Checkbox;
