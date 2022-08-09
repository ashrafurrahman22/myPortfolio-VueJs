<template>
    <div id="navBar" class="navbar lg:px-20 px-10 bg-base-300 pt-8">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         <li><router-link to='/'>Home</router-link> </li>
      <li><router-link to='/projects'>Projects</router-link> </li>
      <li><router-link to='/contact'>Contact</router-link> </li>
      <li><router-link to='/blogs'>Blog</router-link> </li>
      <li><router-link to='/about'>About Me</router-link> </li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">
        <img className='w-14' src="https://i.ibb.co/yVVX1xs/favicon.png" alt="" />
        <h3 id="myName" className='font-medium'>Ashrafur Rahman</h3>
    </a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><router-link to='/'>Home</router-link> </li>
      <li><router-link to='/projects'>Projects</router-link> </li>
      <li><router-link to='/contact'>Contact</router-link> </li>
      <li><router-link to='/blogs'>Blog</router-link> </li>
      <li><router-link to='/about'>About Me</router-link> </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar"
}
</script>


<style>
 #navBar {
    font-family: raleway;
    letter-spacing: 2px;
 } 
 #myName {
     font-family: aleos;
    letter-spacing: 1px;
 }
</style>