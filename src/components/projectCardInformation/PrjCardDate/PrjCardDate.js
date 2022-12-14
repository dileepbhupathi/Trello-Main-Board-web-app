import React, { useState } from "react";
import "./PrjCardDate.scss";
import { DatePicker, Card } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import { v4 as uuid } from "uuid";

const PrjCardDate = ({ dateChecked }) => {
  const [duration, setDuration] = useState();
  const [timeLeft, setTimeLeft] = useState(0);

  let id = uuid().slice(0, 3);

  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
  }

  const onChangeDatePicker = (date, dateString) => {
    setDuration(date, dateString);
    let a = new Date(moment(dateString)._i);
    let b = new Date(moment(new Date()).format("YYYY-MM-DD"));
    const difference = dateDiffInDays(a, b);
    setTimeLeft(difference);
    console.log("date selected :", dateString);

    const request = indexedDB.open("PrjCardInforation", 2);

    const Adddate = (db, date) => {
      const tx = db.transaction(["date"], "readwrite");
      const store = tx.objectStore("date");
      let query = store.add(date);
      query.onsuccess = function (event) {
        console.log(event);
      };

      tx.oncomplete = function () {
        db.close();
      };
    };

    request.onupgradeneeded = () => {
      let db = request.result;
      let store = db.createObjectStore("date", {
        keyPath: "index",
        autoIncrement: true,
      });

      // let index = store.createIndex("Content", "Content", {
      //   keyPath: "content",
      //   unique: true,
      // });
      // console.log("index");
    };

    request.onsuccess = () => {
      const db = request.result;
      Adddate(db, { id: id, date: dateString });
      let items = db
        .transaction(["date"], "readwrite")
        .objectStore("date")
        .getAll();
      items.onsuccess = function (event) {
        console.log("item success");
      };
    };
  };

  return (
    <div className="Project-card-date-section">
      <div className="date-message-section">
        <Card>
          <DatePicker onChange={onChangeDatePicker} className="date-picker">
            {dayjs(duration)}
          </DatePicker>
          <span>
            {duration ? (
              dateChecked === false ? (
                timeLeft !== 0 ? (
                  timeLeft > 0 && timeLeft < 5 ? (
                    <span className="warning">due soon</span>
                  ) : (
                    <span className="danger">over due</span>
                  )
                ) : null
              ) : (
                <span className="success">completed</span>
              )
            ) : null}
          </span>
        </Card>
      </div>
    </div>
  );
};

export default PrjCardDate;
