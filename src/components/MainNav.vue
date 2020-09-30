<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <div class="container">
      <b-navbar-brand to="/">Homescreens</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <template v-if="isAuthenticated"> -->
            <b-nav-item to="/upload">Upload</b-nav-item>
          <!-- </template> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" v-if="!isAuthenticated">Sign in</b-nav-item>
          <b-nav-item-dropdown right v-if="isAuthenticated">
            <template slot="button-content">{{ currentUser ? currentUser.firstName : '' }}</template>
            <b-dropdown-item to="/user/profile">Profile</b-dropdown-item>
            <b-dropdown-item href="#" v-on:click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
      </b-collapse>
    </div>
  </b-navbar>
</template>
