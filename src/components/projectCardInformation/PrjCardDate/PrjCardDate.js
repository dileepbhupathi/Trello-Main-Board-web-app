import React, { useState, useEffect } from "react";
import "./PrjCardDate.scss";
import { DatePicker, Card } from "antd";
import dayjs from "dayjs";
import moment from "moment";
// import { v4 as uuid } from "uuid";

const PrjCardDate = ({ dateChecked, eachBoardItem, selectedCardId }) => {
  const [duration, setDuration] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  // Data From past indexedDb
  const getExistingDataFromDb = (eachBoardItem) => {
    eachBoardItem.task.forEach((element) => {
      if (element.id === selectedCardId.id) {
        if (element.date) {
          setDuration(element.date);
        } else {
          setDuration(Date);
        }
      }
    });
  };
  useEffect(() => {
    getExistingDataFromDb(eachBoardItem);
  }, []);

  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
  }

  // const dateFormat = "YYYY-MM-DD";

  const onChangeDatePicker = (date, dateString) => {
    let a = new Date(moment(dateString)._i);
    let b = new Date(moment(new Date()).format("YYYY-MM-DD"));
    const difference = dateDiffInDays(a, b);
    setTimeLeft(difference);
    let newDate = dateString;
    setDuration(dateString);
    const request = window.indexedDB.open("InitialData", 2);
    request.onsuccess = () => {
      const db = request.result;
      const totaListsData = db
        .transaction(["lists"], "readwrite")
        .objectStore("lists");
      let indexOfClickedCard = eachBoardItem.task.findIndex(function (
        eachCard
      ) {
        if (eachCard.id === selectedCardId.id) {
          return true;
        } else {
          return false;
        }
      });
      let getColumnToAddDate = totaListsData.get(eachBoardItem.index);
      getColumnToAddDate.onsuccess = (event) => {
        let cardToBeAdded = event.target.result;
        cardToBeAdded.task[indexOfClickedCard].date = newDate;
        totaListsData.put(cardToBeAdded);
      };
    };
  };

  return (
    <div className="Project-card-date-section">
      <div className="date-message-section">
        <Card>
          <DatePicker
            onChange={onChangeDatePicker}
            className="date-picker"
            placeholder=""
            value={dayjs(duration)}
          ></DatePicker>
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
