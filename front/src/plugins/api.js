


export default function(ctx, inject){
    const api = {
        // createSubscription(payload){
        //     ctx.$axios.$post('', payload).then(() => console.log('Requête terminée'))
        // },

        createSubscription(payload){
            return ctx.$axios.$post('', payload).then(x => console.log(x.message))
        }
    }
    inject('api', api)
}