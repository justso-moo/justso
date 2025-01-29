<script>
	import {slide} from 'svelte/transition';

	let visibles = {
		'cow': false,
		'go':false,
		'contact':false,
	}

	const changeVisible = (type) => {
		visibles[type] = !visibles[type]
	}

	console.log('mooooofuckingSYJBJS')
</script>
<h1>Mooooo!</h1>

<div class="gcse-search">COW</div>

<button on:click={() => changeVisible('cow')}>COW</button> <button on:click={() => changeVisible('go')}>바로가기</button> <button on:click={() => changeVisible('contact')}>문의하기</button>

{#if visibles.cow}
	<div transition:slide={{delay:500}} class="wrap" >
		<img alt="mooooo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.newspenguin.com%2Fnews%2Fphoto%2F202111%2F5811_20432_4940.jpg&f=1&nofb=1&ipt=3118087b8309e08423c60fa83120d19b4aa9f03fdaee6d2e733592969de7823e&ipo=images">
	</div>
{/if}
{#if visibles.go}
	<div transition:slide={{delay:100}} class="wrap" >
		<div class="gocard">
			<a href="http://www.csia.hs.kr/?act=board.list&code=1139">학교소식</a><br>
			<a href="http://www.csia.hs.kr/?act=remain.main&mcode=251413">귀가귀교신청</a><br>
			<a href="체험학습.html">체험학습신청</a><br>
		</div>
	</div>
	<script>
		changeVisible('cow');
	</script>
{/if}
{#if visibles.contact}
	<div class="contact">
			contact: hdab@keemail.me
	</div>
{/if}

<style>
	.gocard {
		background: bisque;
		color: cornflowerblue;
		width: 10%;
		text-align: center;
	}
	.contact {
		background: dimgray;
		color: white;
		width: 10%;
		text-align: center;
	}
</style>
