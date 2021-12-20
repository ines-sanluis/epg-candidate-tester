export default {
    created() {
        const self = this
        this.$api = {
            get(url) {
                return self.$api.fetch(url, { method: 'GET' });
            },
            fetch(url, config) {
                return fetch(url, config)
                    .then(async (response) => {
                        if (!response.ok) {
                            let error_msg
                            try {
                                error_msg = await response.json()
                            } catch (error) {
                                error_msg = "Server error"
                            }
                            alert(error_msg)
                        }
                        return response
                    })
            }
        }
    }
}
