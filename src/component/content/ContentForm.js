import { React, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./contentForm.scss";
const ContentForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [divs, setDivs] = useState([]);
  const [Contents, setContents] = useState([]);

  const addSubject = (e) => {
    console.log(e);
  };

  const addDiv = () => {
    setCount(count + 1);
    setDivs((prevDivs) => [
      ...prevDivs,
      <input
        key={count}
        type="text"
        placeholder="해야 할 일을 작성해주세요!!"
      />,
    ]);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="content-form__container">
      <div className="content-form__wrapper">
        <div className="content-form">
          <div className="subject__wrapper">
            <div className="content-form__subject">제목</div>
            <input
              type="text"
              onChange={addSubject}
              placeholder="제목을 입력해주세요."
            />
          </div>
          <div className="datePicker__wrapper">
            <div className="content-form__startDate">시작일</div>
            <div className="start-date-picker">
              <DatePicker
                locale={ko}
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
            <div className="end-date-picker">
              <DatePicker
                locale={ko}
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
          <div className="content">
            <input
              key={count}
              type="text"
              placeholder={"해야 할 일을 작성해주세요!!"}
            />
            {divs}
          </div>
          <div className="content-form__btn" onClick={addDiv}>
            추가
          </div>
          <div className="content-form__btn">저장</div>
          <div className="content-form__btn">
            <Link to="/">취소</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentForm;
