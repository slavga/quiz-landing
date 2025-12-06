function scrollToForm() {
  document.getElementById("form").scrollIntoView({behavior:"smooth"});
}

document.getElementById("leadForm").addEventListener("submit", async e => {
  e.preventDefault();
  let formData = new FormData(e.target);
  let res = await fetch("submit.php", {
    method: "POST",
    body: formData
  });
  if (res.ok) {
    document.getElementById("success").innerText = "Заявка отправлена!";
    e.target.reset();
  }
});
