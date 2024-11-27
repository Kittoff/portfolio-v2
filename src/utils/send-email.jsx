export function sendEmail(data, onSuccess) {
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
      if (response.code === 200) {
        onSuccess();
      }
    })
    .catch((err) => {
      console.log("err:", err);
    });
}
