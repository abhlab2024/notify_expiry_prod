<template>
    <header>

        <p>Hello world</p>

        <nav>
            <a id="nav-settings" @click="selectTab('settings')">Settings</a>
            <a id="nav-table" @click="selectTab('tabledata')">Data Table</a>
        </nav>
    </header>

</template>



<script setup>


const emit = defineEmits(['selectedTab']);



const selectTab = (tabName) => {
  emit('selectedTab', tabName);
}



</script>