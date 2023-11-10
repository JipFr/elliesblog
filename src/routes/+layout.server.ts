import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ route, fetch }) => {
	const res = await fetch(
		"https://pinterest.com/resource/UserPinsResource/get/?source_url=%2Fellienorton_%2Fpins%2F&data=%7B%22options%22%3A%7B%22is_own_profile_pins%22%3Atrue%2C%22username%22%3A%22ellienorton_%22%2C%22field_set_key%22%3A%22grid_item%22%2C%22pin_filter%22%3Anull%7D%2C%22context%22%3A%7B%7D%7D&_=1699632193955"
	);
	const data = await res.json();
	const pins = data.resource_response.data;
	return { pins };
};
