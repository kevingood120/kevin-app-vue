<template>
  <div id="app">
      <h2>Clientes</h2>
      <k-data-table :headers="headers" :data="[{ id: 'asdasd', name: 'kevin', email: 'kevingood' }]">
          <template #name="{ row, header }">
              <h3>{{row.name}} - {{header.text}}</h3>
          </template>
      </k-data-table>
      <k-button @click="show = !show" variant="primary">Abrir</k-button>
      <k-modal v-model="show" width="400px" title="Customer">
          <k-form>
              <k-row>
                  <k-column cols="12">
                      <k-text-field label="Nome" name="customer.name"/>
                  </k-column>
                  <k-column cols="12">
                      <k-text-field label="Idade" name="customer.email"/>
                  </k-column>
                  <k-column cols="6">
                      <k-text-field label="Telefone" name="customer.tel"/>
                  </k-column>
                  <k-column cols="6">
                      <k-text-field label="Celular" name="customer.cel"/>
                  </k-column>
                  <k-column cols="6">
                      <k-text-field v-mask="'###.###.###-##'" label="CPF" name="customer.cpf"/>
                  </k-column>
                  <k-column cols="6">
                      <k-text-field label="Tel. Comercial" name="customer.telcom"/>
                  </k-column>
                  <k-column cols="3">
                      <k-text-field label="CEP" name="customer.address.zipcode"/>
                  </k-column>
                  <k-column cols="6">
                      <k-text-field label="Logradouro" name="customer.address.street"/>
                  </k-column>
                  <k-column cols="3">
                      <k-text-field label="Número" name="customer.addressNumber"/>
                  </k-column>
                  <k-column cols="6">
                      <k-text-field label="Bairro" name="customer.address.neighborhood"/>
                  </k-column>
                  <k-column cols="4">
                      <k-text-field label="Cidade" name="customer.address.city"/>
                  </k-column>
                  <k-column cols="2">
                      <k-text-field label="UF" name="customer.address.district"/>
                  </k-column>
                  <k-column cols="12">
                      <k-text-field label="Complemento" name="customer.complement"/>
                  </k-column>
                  <k-column cols="12">
                      <k-text-field label="Observação" type="textarea" name="customer.observations"/>
                  </k-column>
              </k-row>
              <k-button variant="success">
                  Submitar
              </k-button>
          </k-form>
      </k-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IHeader } from './types'
export default Vue.extend({
    data: () => ({
        show: false,
        headers: [
            {
                property: 'id',
                text: '#',
            },
            {
                property: 'name',
                text: 'Name',
            },
            {
                property: 'email',
                text: 'Email',
            },
        ] as IHeader[]
    })
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body, input, textarea {
    font-family: "Roboto", "Arial", sans-serif;
}

html, body {
    width: 100%;
    height: 100%;
}

#app {
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
}
</style>
