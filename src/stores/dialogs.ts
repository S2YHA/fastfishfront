import { ref, type Component } from 'vue'
import { defineStore } from 'pinia'

type DialogState = {
  component: Component | null
  visible: boolean
  props: Object
}

export const useDialogStore = defineStore('dialog', () => {
  const basicState = { visible: false, component: null, props: {} }
  const dialogState = ref<DialogState>(basicState)

  const showDialog = (payload: any) => {
    const { props, component } = payload

    dialogState.value = { visible: true, component, props: props || {} }
  }

  const hideDialog = () => {
    dialogState.value = basicState
  }

  return { dialogState, showDialog, hideDialog }
})
