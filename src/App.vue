<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="./assets/logo.png" width="20" height="20"></a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link to="/threads">Threads</router-link></li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link v-if="!authenticated" to="/auth/register">Register</router-link></li>
            <li><router-link v-if="authenticated && user" to="/">Hey, {{ user.name }}</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Auth from './auth/auth.service'
export default {
  name: 'app',
  data() {
    return {
      user: Auth.getAuthUser(),
      authenticated: Auth.isAuthenticated() 
    }
  }
}
</script>

<style>
#app {
}
</style>
