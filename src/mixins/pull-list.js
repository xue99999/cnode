const { history, location } = window
const getPageKey = () => {
	return history.state == null ? location.href : history.state.key
}

export default {
	mixins: [routeData],
	routeData() {
		return {
			complete: false, //数据是否加载完成
			loading: false, //是否在请求中
			page: 1, //当前请求的页数
			list: [] //列表的数据
		}
	},
	mounted() {
		this.loading = false
	},
	created() {
		if (getPageKey() != this.list.key) { //页面前进
			if (this.page == 1) {
				this.pullList()
				this.list.key = getPageKey()
			} else {
				Object.assign(this.$data, this.$options.routeData())
				this.$nextTick(() => {
					this.list.key = getPageKey()
					this.pullList()
				})
			}
		} else {
			this.loading = false  //防止路由切换
		}
	},
	methods: {
		pullList() {
			console.log('------加载数据-----')
			if (this.complete || this.loading) return
			this.loading = true
			let {url, data = {} } = this._pullList()
			this.$http.get(url, data)
				.then(res => {
					console.log(res)
				})
		}
	}
}