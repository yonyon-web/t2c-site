export const prerender = false;

import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
	// Discord から返された OAuth "code" を取得
	const code = url.searchParams.get('code');
	if (!code) {
		throw redirect(302, '/');
	}

	// 環境ごとにAPIエンドポイントを切り替え（本番/ローカル）
	const endpoint = import.meta.env.DEV
		? 'http://localhost:5001/t2cproject-11057/us-central1/discordAuth'
		: 'https://us-central1-t2cproject-11057.cloudfunctions.net/discordAuth';

	const _url = new URL(endpoint);
	_url.searchParams.append('code', code);

	// Functions に code を送信して Firebase カスタムトークンを取得
	const res = await fetch(_url.toString(), {
		method: 'GET'
	});

	console.log('[auth/callback] code =', code);
	console.log('[auth/callback] response =', await res.clone().text());


	if (!res.ok) {
		console.error(await res.text());
		throw redirect(302, '/?error=auth_failed');
	}

	const { firebaseToken } = await res.json();

	// トークンを持って /auth/complete にリダイレクト
	throw redirect(302, `/auth/complete?token=${firebaseToken}`);
}
