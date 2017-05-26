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
		<v-footer></v-footer>
	</div>
</template>

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
</style>