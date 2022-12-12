import React from "react";
import { v4 as uuidv4 } from "uuid";

export const IndexDB = () => {
  //   if (!window.indexedDB) {
  //     console.log("Your browser doesn't support IndexedDB");
  //     return;
  // }

  const request = indexedDB.open("InitialData", 3);
  request.onerror = (event) => {
    console.log(`database error: ${event.target.errorCode}`);
  };
  request.onsuccess = () => {
    console.log("success");
  };

  //  create the Contacts object store and indexes
  request.onupgradeneeded = () => {
    let db = request.result;
    console.log("db", db); // create the Contacts object store // with auto-increment id

    let store = db.createObjectStore("lists", {
      keyPath: "index",
      autoIncrement: true,
    }); // create an index on the email property

    let index = store.createIndex("Name", "Name", {
      unique: true,
    });
    //    let taskindex = store.createIndex('task', 'task', {
    //     unique: true
    // });
    console.log("index", index);
    //  console.log("index",taskindex);
  };

  function insertContact(db, lists) {
    // create a new transaction
    const txn = db.transaction(["lists"], "readwrite"); // get the Contacts object store
    const store = txn.objectStore("lists"); //
    let query = store.add(lists); // handle success case

    query.onsuccess = function (event) {
      console.log(event);
    }; // handle the error case

    query.onerror = function () {
      // console.log(event.target.errorCode);
    }; // close the database once the // transaction completes

    txn.oncomplete = function () {
      db.close();
    };
  }
  request.onsuccess = () => {
    const db = request.result;
    insertContact(db, {
      uniqueId: uuidv4(),
      Name: "Project Resources",
      task: [
        { id: uuidv4(), content: "Weekly Updates" },
        { id: uuidv4(), content: "Tasks Done" },
      ],
    });
    insertContact(db, {
      uniqueId: uuidv4(),
      Name: "Pending",
      task: [
        { id: uuidv4(), content: "Legal review" },
        { id: uuidv4(), content: "Social media assets" },
      ],
    });
    insertContact(db, {
      uniqueId: uuidv4(),
      Name: "Todo",
      task: [
        { id: uuidv4(), content: "Edit email drafts" },
        { id: uuidv4(), content: "Sketch site banner" },
      ],
    });
    insertContact(db, {
      uniqueId: uuidv4(),
      Name: "Blocked",
      task: [
        { id: uuidv4(), content: "Freelancer contracts" },
        { id: uuidv4(), content: "Budget approval" },
      ],
    });
    insertContact(db, {
      uniqueId: uuidv4(),
      Name: "Done",
      task: [
        { id: uuidv4(), content: "Submite Q1 report" },
        { id: uuidv4(), content: "Campaign Proposal" },
      ],
    });
  };

  // function getContactById(db, id) {
  //   const txn = db.transaction('list', 'readonly');
  //   const store = txn.objectStore('list');

  //   let query = store.get(id);
  //   query.onsuccess = (event) => {
  //       if (!request.result) {
  //           console.log(`The contact with ${id} not found`);
  //       } else {
  //           console.log(event.target.result);
  //           console.log(event.target.result.task);
  //       }
  //   };
  //   query.onerror = () => {
  //       console.log(request.errorCode);
  //   }

  //   txn.oncomplete = function () {
  //       db.close();
  //   };
  // };
  // request.onsuccess = () => {
  //   const db = request.result;
  //   getContactById(db, 18);
  // };

  return <div>Example</div>;
};
