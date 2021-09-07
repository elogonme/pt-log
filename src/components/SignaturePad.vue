<template>
	<div id="app">
		<vueSignature ref="signature" :sigOption="option" :w="'200px'" :h="'80px'" :disabled="disabled" ></vueSignature>
    <q-btn flat round color="grey" icon="mdi-check" @click="save" />
    <q-btn flat round color="grey" icon="mdi-close" @click="clear" />
    <q-btn flat round color="grey" icon="mdi-undo" @click="undo" />
		<!-- <button @click="handleDisabled">disabled</button> -->
	</div>
</template>

<script>
import vueSignature from 'vue-signature'
export default {
	name: 'SignaturePad',
	components: {
		vueSignature
	},
	data () {
		return {
			option: {
				penColor: 'rgb(0, 0, 0)',
				backgroundColor: 'rgb(255,255,255)'
			},
			disabled: false
		}
	},
	methods: {
		save () {
			const _this = this
			const png = _this.$refs.signature.save()
			console.log(png)
		},
		clear () {
			const _this = this
			_this.$refs.signature.clear()
		},
		undo () {
			const _this = this
			_this.$refs.signature.undo()
		},
		fromDataURL (url) {
			const _this = this
			_this.$refs.signature.fromDataURL('data:image/png;base64,iVBORw0K...')
		},
		handleDisabled () {
			const _this = this
			_this.disabled = !_this.disabled
		}
	}
}
</script>
