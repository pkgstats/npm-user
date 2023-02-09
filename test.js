import test from 'ava';
import npmUser from './index.js';

test('user: sindresorhus', async t => {
	const user = await npmUser('sindresorhus');
	t.is(user.name, 'Sindre Sorhus');
	t.regex(user.avatar, /npm-avatar/);
	t.is(user.email, 'sindresorhus@gmail.com');
});

test('user: npm', async t => {
	const user = await npmUser('npm');
	t.is(user.name, 'No Problem, Meatbag');
	t.regex(user.avatar, /npm-avatar/);
	t.is(user.email, 'npm@npmjs.com');
});

test('user: tj', async t => {
	const user = await npmUser('tj');
	t.is(user.name, undefined);
	t.regex(user.avatar, /npm-avatar/);
	t.is(user.email, 'tj@vision-media.ca');
	t.is(user.github, undefined);
	t.is(user.twitter, undefined);
});
