import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const ScriptDB = () => {


// //prefixes of implementation that we want to test
// window.indexedDB =
//   window.indexedDB ||
//   window.mozIndexedDB ||
//   window.webkitIndexedDB ||
//   window.msIndexedDB;

// //prefixes of window.IDB objects
// window.IDBTransaction =
//   window.IDBTransaction ||
//   window.webkitIDBTransaction ||
//   window.msIDBTransaction;
// window.IDBKeyRange =
//   window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

// if (!window.indexedDB) {
//   window.console.log("Your browser doesn't support a stable version of IndexedDB.");
// }

// const employeeData = [
//   { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
//   { id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" },
// ];
// var db;
// var request = window.indexedDB.open("newDatabase", 1);

// request.onerror = function (event) {
//   console.log("error: ");
// };

// request.onsuccess = function (event) {
//   db = request.result;
//   console.log("success: " + db);
// };

// request.onupgradeneeded = function (event) {
//   var db = event.target.result;
//   var objectStore = db.createObjectStore("employee", { keyPath: "id" });

//   for (var i in employeeData) {
//     objectStore.add(employeeData[i]);
//   }
// };

//  function read() {
//   var transaction = db.transaction(["employee"]);
//   var objectStore = transaction.objectStore("employee");
//   var request = objectStore.get("00-03");

//   request.onerror = function (event) {
//     console.log("Unable to retrieve daa from database!");
//   };

//   request.onsuccess = function (event) {
//     // Do something with the request.result!
//     if (request.result) {
//       console.log(
//         "Name: " +
//           request.result.name +
//           ", Age: " +
//           request.result.age +
//           ", Email: " +
//           request.result.email
//       );
//     } else {
//       console.log("Kenny couldn't be found in your database!");
//     }
//   };
// }

//  function readAll() {
//   var objectStore = db.transaction("employee").objectStore("employee");

//   objectStore.openCursor().onsuccess = function (event) {
//     var cursor = event.target.result;

//     if (cursor) {
//       console.log(
//         "Name for id " +
//           cursor.key +
//           " is " +
//           cursor.value.name +
//           ", Age: " +
//           cursor.value.age +
//           ", Email: " +
//           cursor.value.email
//       );
//       cursor.continue();
//     } else {
//       console.log("No more entries!");
//     }
//   };
// }

//  function add() {
//   var request = db
//     .transaction(["employee"], "readwrite")
//     .objectStore("employee")
//     .add({ id: "00-03", name: "Kenny", age: 19, email: "kenny@planet.org" });

//   request.onsuccess = function (event) {
//     console.log("Kenny has been added to your database.");
//   };

//   request.onerror = function (event) {
//     console.log("Unable to add data\r\nKenny is aready exist in your database! ");
//   };
// }

//  function remove() {
//   var request = db
//     .transaction(["employee"], "readwrite")
//     .objectStore("employee")
//     .delete("00-03");

//   request.onsuccess = function (event) {
//     console.log("Kenny's entry has been removed from your database.");
//   };
// }

// add()

// -----------------------

//   if (!window.indexedDB) {
//     console.log("Your browser doesn't support IndexedDB");
//     return;
// }


const request = indexedDB.open("InitialData",1);
request.onerror = (event) => {
 console.log(`database error: ${event.target.errorCode}`);
};
request.onsuccess = () =>{
 console.log("success")
}

// create the Contacts object store and indexes


 request.onupgradeneeded = () => {
  let db = request.result;
  console.log("db",db)

  // create the Contacts object store 
  // with auto-increment id
  let store = db.createObjectStore('list', {
      autoIncrement: true
  });

  // create an index on the email property
  let index = store.createIndex('Name', 'Name', {
      unique: true
  });
 
 console.log("index",index)
};

function insertContact(db, list) {
 // create a new transaction
 const txn = db.transaction(['list'], 'readwrite');
 
 // get the Contacts object store
 const store = txn.objectStore('list');
 //
 let query = store.put(list);

 // handle success case
 query.onsuccess = function (event) {
     console.log(event);
 };

 // handle the error case
 query.onerror = function (event) {
     console.log(event.target.errorCode);
 }

 // close the database once the 
 // transaction completes
 txn.oncomplete = function () {
     db.close();
 };
}
request.onsuccess = () => {
 const db = request.result;


 insertContact(db, {
   Name: ' TODO ',
   firstName: 'Peter',
   lastName: 'James'
});
insertContact(db, {
 Name: ' In progress ',
 firstName: 'Daniel',
 lastName: 'Radclif'
});

insertContact(db, {    
 Name: "not done",
 task: [
   { id: uuidv4(), content: "Monthly Updates" },
   { id: uuidv4(), content: "Tasks Done" },
 ],
},);
insertContact(db, {   
   Name: "Completed",
   task: [
     { id: uuidv4(), content: "Weekly Updates" },
     { id: uuidv4(), content: "Tasks" },
   ],
 },);
 insertContact(db, {   
   Name: "Deva Nandini",
   task: [
     { id: uuidv4(), content: " Updates" },
     { id: uuidv4(), content: "NOt done" },
   ],
 },);
insertContact(db, {
 Name: 'Important',
 firstName: 'Issac',
 lastName: 'Newton'
});
insertContact(db, {
 Name: 'UnImportant',
 firstName: 'Thomas',
 lastName: 'Edison'
});
insertContact(db, {
   Name: 'Pending',
   firstName: 'Alva',
   lastName: 'Thomas'
 });
 insertContact(db, {
   Name: 'Status',
   firstName: 'Johny',
   lastName: 'Thomas'
 });
 insertContact(db, {
   Name: 'Resources',
   firstName: 'Meter',
   lastName: 'Games'
});
insertContact(db, {   
 Name: "Completed",
 task: [
   { id: uuidv4(), content: "Weekly Updates" },
   { id: uuidv4(), content: "done" },
 ],
},);
insertContact(db, {
 Name: 'Project',
 firstName: 'Javier',
 lastName: 'Games'
});
insertContact(db, {   
 Name: "InCompleted",
 task: [
   { id: uuidv4(), content: "Yearly Updates" },
   { id: uuidv4(), content: "All done" },
 ],
},);
insertContact(db, {   
 Name: "Project Management",
 task: [
   { id: uuidv4(), content: "Daily Updates" },
   { id: uuidv4(), content: "pending" },
 ],
},);
insertContact(db, {   
 Name: "Management",
 task: [
   { id: uuidv4(), content: "Quarterly Updates" },
   { id: uuidv4(), content: "Completed" },
 ],
},);
insertContact(db, {
  Name: 'Dileep Bhupathi',
  firstName: 'Dileep',
  lastName: 'Bhupathi'
 });
 insertContact(db, {   
  Name: "Nandini",
  task: [
    { id: uuidv4(), content: "React Developer" },
    { id: uuidv4(), content: "Angular Developer" },
  ],
 },);
};

// function getContactById(db, id) {
//   const txn = db.transaction('list', 'readonly');
//   const store = txn.objectStore('list');

//   let query = store.get(id);

//   query.onsuccess = (event) => {
//       if (!request.result) {
//           console.log(`The contact with ${id} not found`);
//       } else {
//           console.log(event.target.result);
//           console.log(event.target.result.task);

//       }
//   };

//   query.onerror = () => {
//       console.log(request.errorCode);
//   }

//   txn.oncomplete = function () {
//       db.close();
//   };
 
// };
// request.onsuccess = () => {
//   const db = request.result;
//   getContactById(db, 17);
// };

  return (
    <div></div>
  )
}



