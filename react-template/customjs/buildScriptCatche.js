let scriptMap = {};
// $.getScript("js/jquery-1.8.3.min.js", function(data, textStatus, jqxhr) {
//   scriptMap.jquery18 = data;
//   $.getScript("js/bootstrap.min.js", function(data, textStatus, jqxhr) {
//     scriptMap.bootstrap = data;
//   });
// });

// let jquery18 = function() {
//   return new Promise(resolve => {
//     var interval = setInterval(() => {
//       if (scriptMap.jquery18) {
//         clearInterval(interval);
//         resolve();
//       }
//     }, 100);
//   });
// };

// let bootstrapScript = function() {
//   return new Promise((resolve, reject) => {
//     var interval = setInterval(() => {
//       if (scriptMap.bootstrap) {
//         clearInterval(interval);
//         resolve();
//       }
//     }, 100);
//   });
// };

let initializeJSPromise = function() {
  return new Promise((resolve, reject) => {
    var interval = setInterval(() => {
      if (initializeJS) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
};
