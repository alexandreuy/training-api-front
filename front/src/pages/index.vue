<template>
    <div class="container">

        <div>
            <h1> Inscription </h1>
            <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
                    <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
                </b-form-group>
    
                <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter password" required></b-form-input>
                </b-form-group>
    
                <b-button type="submit" variant="primary">Confirmer</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',

            },
            show: true
        }
    },
    methods: {
        async onSubmit(event) {
            await this.$api.createSubscription(this.form)
            console.log('Hello')
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.password = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>