const btn = document.querySelector("#submit");
const inputs = document.querySelector("form");
const mailAddress = "ayt_radminox@hotmail.com";
btn.addEventListener("click", () => {
  const marka = inputs.elements["marka"].value.trim();
  const mail = inputs.elements["mail"].value.trim();
  const hdd = inputs.elements["hdd"].value.trim();
  const ram = inputs.elements["ram"].value.trim();
  const core = inputs.elements["core"].value.trim();
  const kurulum = inputs.elements["kurulum"].value.trim();
  const kabin = inputs.elements["kabin"].value.trim();

  // if (!mail.length > 0) {
  //   alert("Email giriniz.");
  //   return;
  // }
  // console.log(marka, mail, hdd, ram, core, kurulum, kabin);

  if (mail.length > 0) {
    Email.send({
      SecureToken: " 826c71eb-00f5-4f09-a65f-5b12473f5e5d",
      Host: "smtp.elasticemail.com",
      Username: mailAddress,
      Password: "400E434711073A0AF1942DFB608A5D8F6A15",
      To: mailAddress,
      From: mailAddress,
      Subject: "itnoya.com için hazırlanmıştır.",
      Body:
        "Marka Tercihi: " +
        marka +
        "<br>" +
        "Hdd Tipi:" +
        hdd +
        "<br>" +
        "Ram:" +
        ram +
        "<br>" +
        "Fiziksel Core:" +
        core +
        "<br>" +
        "Koruyucu server kabin:" +
        kabin +
        "<br>" +
        "Kurulum:" +
        kurulum +
        "<br>" +
        "Mail Adresi:" +
        mail,
    }).then((msg) => {
      alert("The email successfully sent");
      inputs.elements["mail"].value = "";
    });
  }
});
