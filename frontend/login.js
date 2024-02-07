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
  accessToken = data.access_token;

  const infoDiv = document.querySelector("#info");
  infoDiv.innerText = "로그인 되었습니다";

  window.location.pathname = "/";

  const btn = document.createElement("button");
  btn.innerText = "상품 가져오기";
  btn.addEventListener("click", async () => {
    const res = await fetch("/items", {
      headers: {
        Autorization: `Bearer $(accessToken)`,
      },
    });
    const data = await res.json();
  });
  infoDiv.appendChild(btn);
  //  if (res.status === "200") {
  //    alert("로그인 성공");
  //    window.location.pathname = "/";
  //  } else if (res.status === "401") {
  //    alert("로그인 실패");
  //  }
};

form.addEventListener("submit", handleSubmit);
