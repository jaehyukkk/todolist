import { React, useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import Home from "../../page/home/Home";

const Content = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="content-form__container">
      <div className="content-form__wrapper">
        <div className="content-form__subject">제목</div>
        <div>
          <div className="content-form__datePicker">날짜</div>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
        </div>

        <div className="content">내용</div>
        <div className="content-form__save">저장</div>
        <div className="content-form__cancel">
          <Link to="/">취소</Link>
        </div>
      </div>
    </div>
  );
};
export default Content;
