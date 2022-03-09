import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'calculator',
	state: () => ({
		bill: '',
		tip: '',
		people: '',
	}),
	getters: {
		tipAmount(state) {
			if (state.bill && state.people && state.tip) {
				return (Number(state.bill) * (Number(state.tip) / 100)) / Number(state.people)
			} else return 0
		},
		total(state) {
			if (state.bill && state.people && state.tip && state.tip != '0') {
				return (Number(state.bill) * (1 + Number(state.tip) / 100)) / Number(state.people)
			} else return 0
		},
	},
	actions: {
		reset() {
			this.bill = ''
			this.tip = ''
			this.people = ''
		},
	},
})
