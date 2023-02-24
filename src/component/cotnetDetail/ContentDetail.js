import { React, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./contentDetail.scss";
const ContentDetail = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [items, setItems] = useState([0]);
  const [subject, setSubject] = useState();

  const addSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleAdd = () => {
    setItems([...items, { id: items.length }]);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  console.log(items);
  const handleSave = () => {
    const data = {
      subject: subject,
      startDate: startDate,
      endDate: endDate,
      items: items.map((item) => item.value),
    };

    axios
      .post("http://localhost:8080/api/v1/todo", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="content-detail__container">
      <div className="content-detail__wrapper">
        <div className="content-detail">
          <div className="subject__wrapper">
            <div className="content-detail__subject">제목</div>
            <input
              type="text"
              onChange={addSubject}
              placeholder="제목을 입력해주세요."
            />
          </div>
          <div className="datePicker__wrapper">
            <div className="content-detail__startDate">시작일</div>
            <div className="start-date-picker">
              <DatePicker
                locale={ko}
                selected={startDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy-MM-dd HH:mm"
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="content-detail__endDate">종료일</div>
            <div className="end-date-picker">
              <DatePicker
                locale={ko}
                selected={startDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy-MM-dd HH:mm"
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>
          <div className="content">
            {items.map((item) => (
              <div key={item.id}>
                <input
                  key={item.id}
                  type="text"
                  placeholder={item.id}
                  onChange={(e) =>
                    setItems(
                      items.map((i) =>
                        i.id === item.id
                          ? { id: i.id, value: e.target.value }
                          : i
                      )
                    )
                  }
                />
                <div
                  className="content-detail__delBtn"
                  onClick={() => handleDelete(item.id)}
                >
                  삭제
                </div>
              </div>
            ))}
          </div>
          <div className="content-detail__btn" onClick={handleAdd}>
            추가
          </div>
          <div className="content-detail__btn" onClick={handleSave}>
            저장
          </div>
          <div className="content-detail__btn">
            <Link to="/">취소</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentDetail;
