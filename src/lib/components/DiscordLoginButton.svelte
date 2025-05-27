<!-- src/lib/components/DiscordLoginButton.svelte -->
<script lang="ts">
	// 任意のボタンテキストを変更可能に
	export let label = 'Discordでログイン';

	// DiscordアプリのクライアントID（VITEプレフィックス付き環境変数）
	const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID;

	// ローカル or 本番でリダイレクト先を自動切り替え
	const redirectUri = import.meta.env.DEV
		? 'http://localhost:5173/auth/callback'
		: 'https://t2c.site.yonyon.info/auth/callback';

	const discordOAuthURL =
		`https://discord.com/api/oauth2/authorize` +
		`?client_id=${clientId}` +
		`&redirect_uri=${encodeURIComponent(redirectUri)}` +
		`&response_type=code` +
		`&scope=identify%20guilds`;
</script>

<a href={discordOAuthURL}>
	<button class="discord-login-button">
		{label}
	</button>
</a>

<style>
	.discord-login-button {
		background-color: #5865f2;
		color: white;
		padding: 0.6em 1.2em;
		font-size: 1rem;
		font-weight: bold;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.discord-login-button:hover {
		background-color: #4e5bd9;
	}
</style>
