<template>



  <!-- first login -->
  <div style="display: none;" class="main-container">
    <div class="content-container">
      <div class="flex">
        <div id="passwordForm">
          <input type="password" name="password" placeholder="Enter password" required>
          <button type="submit">Submit</button>
        </div>
      </div>

    </div>
  </div>







  <div v-if="sessionActive" class="main-container">

    <!-- header -->

    <div class="content-container">

      <!-- either settings or table -->
       <headerVue  @selectedTab="handleTabChange" />

      <!-- settings -->

      <div v-if="activeScreen == 'settings'"  id="settings-section" class="section">
        <div class="settings">
          <h2>Settings</h2>
          <p>Configure your preferences here.</p>

        </div>
      </div>


      <!-- table data -->
      <div v-if="activeScreen == 'tabledata'" id="table-section" class="section">
        <h2>Data Table</h2>
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item One</td>
              <td>100</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Item Two</td>
              <td>200</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Item Three</td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  </div>


</template>




<script setup>

import { ref } from 'vue';
import headerVue from '@/components/header.vue';




const sessionActive = ref(true);

const activeScreen = ref('tabledata')

// const globalData = reactive({activeScreen: 'tabledata'});
// provdide('globalData', globalData);




// const switchToSettings = () => {
//   activeScreen.value = 'settings';
// }


// const switchToTabledata = () => {
//   activeScreen.value = 'tabledata';
// }



const handleTabChange = (tab) => {

  activeScreen.value = tab;

  // console.log(tab);

}



</script>



<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
}

.main-container {
  width: calc(100% - 40px);
  max-width: 1300px;
  margin: 20px auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

header {
  background-color: #333;
  color: #fff;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
}

header nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 1.5em;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
}

header nav a:last-child {
  margin-right: 0;
}

header nav a:hover {
  color: #ffdd57;
}

.content-container {
  padding: 1em;
}

.section {
  // display: none;
  display: block;
  animation: fadeIn 0.3s ease-in;
  margin-top: 1rem;
}

// .section.active {
//   display: block;
//   animation: fadeIn 0.3s ease-in;
// }

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Settings Section Style */
.settings {
  padding: 1em;
  background: #e9ecef;
  border-radius: 4px;
}

/* Data Table Style */
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1em;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 0.75em;
  text-align: left;
}

.data-table th {
  background-color: #f8f9fa;
}


.flex {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px;
}

input[type="password"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 200px;
}

#passwordForm {
  gap: 1rem;
  display: flex;
  margin: auto;
}

button[type="submit"] {
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #555;
}
</style>