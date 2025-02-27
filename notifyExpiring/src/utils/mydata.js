// Import required modules from Vue
import { reactive, watch } from 'vue'

// Initialize reactive data store
const dataStore = reactive({
  rows: []
})

// Function to load data from JSON file
export const loadData = () => {
  const data = JSON.parse(fs.readFileSync('./datatable.json'))
  dataStore.rows = data
}

// Watch for changes in the reactive data and save to JSON file
watch(() => dataStore.rows, (newRows) => {
  fs.writeFileSync('./datatable.json', JSON.stringify(newRows, null, 2))
}, { deep: true })

// Function to add a new row
export const addRow = (newRow) => {
  dataStore.rows.push(newRow)
}

// Function to edit a row by srno
export const editRow = (srno, updatedRow) => {
  const index = dataStore.rows.findIndex(row => row.srno === srno)
  if (index !== -1) {
    dataStore.rows[index] = updatedRow
  } else {
    throw new Error('Row not found')
  }
}

// Function to delete a row by srno
export const deleteRow = (srno) => {
  dataStore.rows = dataStore.rows.filter(row => row.srno !== srno)
}
