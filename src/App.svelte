<script>
  // @ts-nocheck

  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import NotFount from "./pages/NotFount.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Router from "svelte-spa-router";
  import "./css/style.css";

  const routes = {
    "/": Main,
    "/Login": Login,
    "/Signup": Signup,
    "/Write": Write,
    "*": NotFount,
  };
</script>

<Router {routes} />

<style>
</style>
