const ReCAPTCHA = ({ handleSubmit, buttonText }) => {
  const handleReCAPTCHA = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(function () {
      window.grecaptcha
        .execute("6Lddpp8cAAAAAKaS-591Tnt-8-nW3kx4mSKhPqZZ", {
          action: "submit",
        })
        .then(function (token) {
          console.log("TOKEN", token);
          const url =
            " https://hi7a3vwghf.execute-api.us-east-2.amazonaws.com/default/verifyReCAPTCHA";
          fetch(url, {
            method: "POST",
            body: {
              captchaResponse: token,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.dir(data);
              handleSubmit();
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });
    });
  };
  return (
    <button onClick={handleReCAPTCHA} data-action="submit">
      {buttonText}
    </button>
  );
};

export default ReCAPTCHA;
