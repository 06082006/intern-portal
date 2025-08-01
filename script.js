fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').innerText = data.name;
    document.getElementById('referral').innerText = data.referralCode;
    document.getElementById('donations').innerText = "₹" + data.donations;
  });

function copyReferral() {
  const code = document.getElementById('referral').innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert("Referral Code Copied: " + code);
  });
}
