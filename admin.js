import { supabase } from "./supabaseConfig.js";

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    Swal.fire("Access Denied", error.message, "error");
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Login Successful",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    window.location.href = "admin-dashboard.html";
  });
});

// Session Protection: Already logged in? Redirect to dashboard
async function checkIfLoggedIn() {
  const { data } = await supabase.auth.getSession();
  const session = data.session;

  if (session && window.location.pathname.includes("admin.html")) {
    window.location.href = "admin-dashboard.html";
  }
}
checkIfLoggedIn();
