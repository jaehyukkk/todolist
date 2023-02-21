import { React, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./contentForm.scss";

const ContentForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    console.log(startDate);
  }, [startDate]);
  return (
    <div className="content-form__container">
      <div className="content-form__wrapper">
        <div className="content-form">
          <div className="content-form__subject">제목</div>
          <input type="text" placeholder="제목을 입력해주세요." />
          <div>
            <div className="content-form__startDate">시작일</div>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy-MM-dd HH:mm"
              />
            </div>
            <div className="content-form__endDate">종료일</div>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy-MM-dd HH:mm"
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
    </div>
  );
};
export default ContentForm;
