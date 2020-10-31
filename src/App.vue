<template>
  <div id="app">
    <k-header @toggle="menu = true"></k-header>
    <k-drawer v-model="menu" />
    <k-container>
      <h2>Clientes</h2>
      <hr />
      <k-data-table
        :headers="headers"
        :paginationSettings.sync="pagination"
        :data="[{ id: 'asdasd', name: 'kevin', email: 'kevingood' }]"
      >
        <template #actions="{ row }">
          <a @click="edit(row)" href="#">Editar</a>
        </template>
      </k-data-table>
      <k-button @click="show = true" variant="primary">Abrir</k-button>
      <k-modal width="400px" v-model="show" title="Customer">
        <k-form>
          <k-row>
            <k-column cols="12">
              <k-text-field label="Nome" name="customer.name" />
            </k-column>
            <k-column cols="12">
              <k-text-field label="Idade" name="customer.email" />
            </k-column>
            <k-column cols="6">
              <k-text-field label="Telefone" name="customer.tel" />
            </k-column>
            <k-column cols="6">
              <k-text-field label="Celular" name="customer.cel" />
            </k-column>
            <k-column cols="6">
              <k-text-field
                v-mask="'###.###.###-##'"
                label="CPF"
                name="customer.cpf"
              />
            </k-column>
            <k-column cols="6">
              <k-text-field label="Tel. Comercial" name="customer.telcom" />
            </k-column>
            <k-column cols="3">
              <k-text-field label="CEP" name="customer.address.zipcode" />
            </k-column>
            <k-column cols="6">
              <k-text-field label="Logradouro" name="customer.address.street" />
            </k-column>
            <k-column cols="3">
              <k-text-field label="Número" name="customer.addressNumber" />
            </k-column>
            <k-column cols="6">
              <k-text-field
                label="Bairro"
                name="customer.address.neighborhood"
              />
            </k-column>
            <k-column cols="4">
              <k-text-field label="Cidade" name="customer.address.city" />
            </k-column>
            <k-column cols="2">
              <k-text-field label="UF" name="customer.address.district" />
            </k-column>
            <k-column cols="12">
              <k-text-field label="Complemento" name="customer.complement" />
            </k-column>
            <k-column cols="12">
              <k-text-field
                label="Observação"
                type="textarea"
                name="customer.observations"
              />
            </k-column>
          </k-row>
          <k-button variant="success">
            Submitar
          </k-button>
        </k-form>
      </k-modal>
    </k-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IHeader } from "./types";
export default Vue.extend({
  data: () => ({
    show: false,
    menu: false,
    headers: [
      {
        property: "id",
        text: "#"
      },
      {
        property: "name",
        text: "Name"
      },
      {
        property: "email",
        text: "Email"
      },
      {
        property: "actions",
        text: "Ações"
      }
    ] as IHeader[],
    pagination: {}
  }),
  watch: {
    pagination(value) {
      console.log(value);
    }
  },
  methods: {
    edit(row: any) {
      console.log(row);
    }
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,
input,
textarea {
  font-family: "Roboto", "Arial", sans-serif;
}

html,
body {
  width: 100%;
  height: 100%;
}
</style>
