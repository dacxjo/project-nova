<template>
  <aside
    class="w-full h-full bg-gray-200 rounded-xl shadow-lg border-r border-gray-300 flex items-start
    justify-center p-20"
  >
    <nav>
      <ul>
        <li class="p-4">
          <router-link
            exact-active-class="active-link"
            class="shadow w-full block p-4 text-center text-gray-500 rounded transition
            hover:bg-purple-600 hover:text-white focus:outline-none"
            to="/"
            >Home</router-link
          >
        </li>
        <li class="p-4">
          <router-link
            exact-active-class="active-link"
            class="shadow w-full block p-4 text-center text-gray-500 rounded transition
            hover:bg-purple-600 hover:text-white focus:outline-none"
            to="/customers"
            >Customers</router-link
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>
