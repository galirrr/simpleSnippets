#use in browser  console
myList = [1,2,3,4];
const data = JSON.stringify(myList, null, 2); // Pretty-print JSON
const blob = new Blob([data], { type: 'application/json' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'myList.json'; // Desired file name
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
