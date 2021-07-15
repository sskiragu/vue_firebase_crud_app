<template>
 <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow p-2 mb-0">
  
    
    <span class="dasboard-text">Mysite.com</span>
  
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      
        Welcome Jassa
      
    </li>
  </ul>
</nav>
<!-- Sidebar navigation -->
<div class="container-fluid">
  <div class="row">
    <nav class="col-md-2 d-md-block bg-light sidebar vh-100" style="margin-top: 60px;">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
         
          
          <li class="nav-item">
           
            <router-link class="nav-link link-dark" to="/add-student">
             Add Student
           </router-link>
          </li>
         
          <li class="nav-item">
            <router-link class="nav-link link-dark" to="/students">
             Students
          </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Main content -->
    <main role="main" style="margin-top: 50px;" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <div class="inner-adjust">
        <!-- Use router template to show the components for which router service is activated -->
         <router-view />
      </div>
    </main>
  </div>
</div>
<div class="jumbotron text-center mb-0 fixed-bottom bg-dark text-white">
 <p>mysite.com</p> 
</div>
</template>
