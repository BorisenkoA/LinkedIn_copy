function saveDataFunction() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userData = [];

  userData.push(email);
  userData.push(password);

  const userDataString = JSON.stringify(userData);

  const file = new Blob([userDataString], {type: "text/plain" });

  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(file);
  anchor.download = "userData.txt";
  anchor.click();
};