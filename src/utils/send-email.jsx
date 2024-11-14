export function sendEmail(data, onSuccess) {
  console.log("data : ", data);
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("response : ", response);
      if (response.code === 200) {
        onSuccess();
      }
    })
    .catch((err) => {
      console.log("err:", err);
    });
}
