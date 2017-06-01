<template>
	<div>
		<nav class="nav">
			<ul>		
				<li class="nav_item" :class="{ active: !this.$route.query.tab }">
					<router-link to="/">全部</router-link>
				</li>
				<li class="nav_item" :class="{ active: this.$route.query.tab == 'good'}">
					<router-link to="/?tab=good">精华</router-link>
				</li>
				<li class="nav_item" :class="{ active: this.$route.query.tab == 'share'}">
					<router-link to="/?tab=share">分享</router-link>
				</li>
				<li class="nav_item" :class="{ active: this.$route.query.tab == 'ask'}">
					<router-link to="/?tab=ask">问答</router-link>
				</li>
				<li class="nav_item" :class="{ active: this.$route.query.tab == 'job'}">
					<router-link to="/?tab=job">招聘</router-link>
				</li>
			</ul>
		</nav>
		<v-content>
			<ul class="list">
				<li class="list_item">
					<router-link to="/">
					<div class="list_top">
						<div class="avatar" style="background-image: url(https://avatars0.githubusercontent.com/u/3118295?v=3&s=120)">
						</div>

						<div class="extra">
							<h2 class="name">xuejun</h2>
							<div class="desc">
								<time class="time">1天前</time><span class="tag">#分享#</span>
							</div>
						</div>
					</div>
					<div class="icon_wrap">
						<div class="icon">
							<i class="iconfont icon-topic-good green"></i>
						</div>
						<div class="icon">
							<i class="iconfont icon-topic-top red"></i>
						</div>
					</div>
					<div class="tit">
						凡测试影响用户的，直接封号
					</div>
					<div class="list_bot">
						<div class="item">
							<i class="iconfont icon-click"></i><span class="text">341</span>
						</div>
						<div class="item">
							<i class="iconfont icon-comment"></i><span class="text">6</span>
						</div>
						<div class="item">
							<time class="text">6小时前</time>
						</div>
					</div>
					</router-link>
				</li>
			</ul>
		</v-content>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import pullList form 'pull-list'

	export default {
		mixins: [pullList],
		created() {
			console.log($route)
		},
		methods: {
			_pullList() {
				var { page, $route } = this
				var { tab = 'all' } = $route.query
				return {
					url: 'topics',
					data: { page, tab } 
				}
			}
		}
	}
</script>

<style lang="less">
	.nav {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		border-bottom:  1px solid #ddd;
		ul {
			display: flex;
			width: 100%;
			.nav_item {
				position: relative;
				flex: 1;
				height: 49px;
				line-height: 49px;
				text-align: center;
			}
			a {
				display: block;
				font-size: 14px;
				color: #a2a2a2;
			}
			.active {
				a {
					color: #222;
				}
				&:after {
					content: '';
					position: absolute;
					bottom: 1px;
					left: 0;
					right: 0;
					height: 3px;
					background: #80bd01;
				}
			}
		}
	}
	.list {
		background-color: #eee;
		overflow: hidden;
		.list_item {
			background-color: #fff;
			padding: 15px;
			padding-bottom: 0;
			margin-bottom: 15px;
			box-shadow: 0 0 5px #ccc;
		}
		.list_top {
			display: flex;
			.avatar {
				width: 30px;
				height: 30px;
				margin-right: 5px;
				border-radius: 50%;
				background-color: #f7f7f7;
				background-repeat: no-repeat;
				background-position: center center;
				border: 1px solid #ddd;
				background-size: cover;
			}
			.extra {
				flex: 1;
				text-align: left;
				.name {
					font-size: 16px;
					line-height: 24px;
					margin-bottom: 5px;
					color: #080808;
				}
				.desc {
					font-size: 12px;
					line-height: 16px;
					.time {
						color: #aaa;
						margin-right: 5px;
					}
					.tag {
						color: #80bd01;
					}
				}
			}
		}
		.icon_wrap {
			position: absolute;
			display: flex;
			right: 0;
			top: 0;
			.icon {
				padding: 20px 5px;
				flex: 1;
				overflow: hidden;
				.red {
					color: red;
				}
				.green {
					color: green;
				}
				.iconfont {
					display: block;
					font-size: 34px;
					transform: rotate(35deg);
				}
			}
		}
		.tit {
			padding: 10px 0;
			text-align: left;
			font-size: 16px;
			line-height: 22px;
			font-weight: bold;
			color: #222;
		}
		.list_bot {
			display: flex;
			padding: 10px 0;
			border-top: 1px solid #e1e1e1;
			.item {
				flex: 1;
				padding: 0 10px;
				border-right: 1px solid #eee;
				line-height: 20px;
				&:last-child {
					border-right: none;
				}
				.iconfont {
					font-size: 16px;
					margin-right: 5px;
					color: #aaa;
				}
				.text {
					font-size: 12px;
				}
			}
		}
	}
</style>