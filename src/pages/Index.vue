<template>
  <q-page padding>
    <div  class="flex justify-center">
      <img
      class="responsive"
      alt="HammerFitness logo"
      src="~assets/hammerfitness.png"
    >
    </div>

    <div class="text-h5 text-center q-mt-lg q-pa-xs bg-blue-2">Client Sign off Sheet</div>
      <div class="q-pa-md">
        <q-table
          flat
          bordered
          separator="cell"
          :rows="titleRows"
          hide-pagination
          hide-header
        >
          <template v-slot:top>
            <div class="text-h5">Client Name</div>
            <q-space />
            <q-select
              label="Select Client"
              v-model="model"
              map-options
              :options="clients"
              style="min-width: 200px"
            ></q-select>
          </template>
        </q-table>
        <q-table
          class="color-header-table"
          flat
          bordered
          :rows="rows"
          :columns="columns"
          row-key="name"
          separator="cell"
          :pagination="initialPagination"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="date" :props="props">
                {{ props.row.date }}
                <q-popup-edit v-model="props.row.date">
                  <q-date v-model="props.row.date" minimal dense autofocus counter />
                </q-popup-edit>
              </q-td>
              <q-td key="session" :props="props">{{ props.row.session }}</q-td>
              <q-td key="date" :props="props">
                {{ props.row.signature }}
                <q-popup-edit v-model="props.row.signature">
                  <q-input v-model="props.row.signature" dense autofocus counter />
                </q-popup-edit>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
const titleColumns = [
  { name: 'name', label: 'Total Sessions Purchased', align: 'left' },
  { name: 'session', label: 'Coach', align: 'left' },
  { name: 'signature', label: 'Irada', align: 'left' }
]
const titleRows = [
  { name: 'Total Sessions Purchased', session: 'Coach', signature: 'Irada' }
]
const columns = [
  { name: 'date', required: true, label: 'Date', align: 'left', field: 'date', sortable: true },
  { name: 'session', align: 'center', label: 'Session', field: 'session', sortable: true },
  { name: 'signature', label: 'Client Signature', field: 'signature', align: 'center' }
]

const date = ref('2019/02/01')

const rows = [
  { date: date.value, session: '1', signature: '' },
  { date: '2021/06/25', session: '2', signature: '' },
  { date: '2021/06/28', session: '3', signature: '' },
  { date: '2021/06/30', session: '4', signature: '' },
  { date: '2021/07/02', session: '5', signature: '' },
  { date: '2021/07/05', session: '6', signature: '' }
]

export default defineComponent({
  name: 'PageIndex',
  setup () {
    return {
      model: ref(null),
      columns,
      rows,
      titleColumns,
      titleRows,
      clients: ['Andre', 'Lily', 'Samantha', 'Jack'],
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 25
        // rowsNumber: xx if getting data from a server
      }
    }
  }
})
</script>
<style lang="sass">
  .q-table__top
    background-color: #dddddd
  .color-header-table
  .q-table__top,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #dddddd
</style>
