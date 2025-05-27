<!-- src/routes/auth/complete/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase';
	import { signInWithCustomToken } from 'firebase/auth';
    import { redirect } from '@sveltejs/kit';

	onMount(async () => {
		const token = new URLSearchParams(window.location.search).get('token');
		if (token) {			
			await signInWithCustomToken(auth, token);
			window.location.href = '/'; // ログイン後トップへリダイレクト
		} else {
			alert("ログインに失敗しました");
			redirect("/");
		}
	});
</script>

<p>ログイン処理中...</p>
