const form = document.querySelector("login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  if (res.status === "200") {
    alert("로그인 성공");
    window.location.pathname = "/";
  } else if (res.status === "401") {
    alert("로그인 실패");
  }
};

form.addEventListener("submit", handleSubmit);
