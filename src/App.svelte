<script>
  // @ts-nocheck

  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import NotFount from "./pages/NotFount.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Router from "svelte-spa-router";
  import "./css/style.css";
  import { user$ } from "./store";
  import {
    GoogleAuthProvider,
    getAuth,
    signInWithCredential,
  } from "firebase/auth";
  import { onMount } from "svelte";
  import Loading from "./pages/Loading.svelte";
  import MyPage from "./pages/MyPage.svelte";

  let isLoding = true;

  const auth = getAuth();

  const checkLogin = async () => {
    const token = localStorage.getItem("token"); //토큰을 바탕으로
    if (!token) return (isLoding = false);

    const credential = GoogleAuthProvider.credential(null, token); //인증 진행
    const result = await signInWithCredential(auth, credential); //결과값에서 유저 정보 있을 것
    const user = result.user; //결과값에 유저정보 가져옴
    user$.set(user); //스토어에 유저정보 업데이트
    isLoding = false;
  };

  const routes = {
    "/": Main,
    "/Signup": Signup,
    "/Write": Write,
    "/My": MyPage,
    "*": NotFount,
  };

  onMount(() => checkLogin());
</script>

{#if isLoding}
  <Loading />
{:else if !$user$}
  <Login />
{:else}
  <Router {routes} />
{/if}
