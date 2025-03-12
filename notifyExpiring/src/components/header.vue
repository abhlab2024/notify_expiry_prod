<template>
    <header>

        <p>Hello world</p>
        <nav class="navigations">
            <a :class="{ active: props.active_tab === 'settings' }" id="nav-settings" @click="selectTab('settings')">Settings</a>
            <a :class="{ active: props.active_tab === 'tabledata' }" id="nav-table" @click="selectTab('tabledata')">Data Table</a>
        </nav>
    </header>

</template>



<script setup>

const props = defineProps({
  active_tab: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['selectedTab']);



const selectTab = (tabName) => {
  emit('selectedTab', tabName);
}



</script>