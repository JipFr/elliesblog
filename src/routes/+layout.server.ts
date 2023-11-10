import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async ({ route, fetch }) => {
	const res = await fetch(
		"https://pinterest.com/resource/UserPinsResource/get/?source_url=%2Fellienorton_%2Fpins%2F&data=%7B%22options%22%3A%7B%22is_own_profile_pins%22%3Atrue%2C%22username%22%3A%22ellienorton_%22%2C%22field_set_key%22%3A%22grid_item%22%2C%22pin_filter%22%3Anull%7D%2C%22context%22%3A%7B%7D%7D&_=1699632193955"
	);
	const data = await res.json();
	const pins = data.resource_response.data;

	const favouritesRes = await fetch(
		"https://pinterest.com/resource/BoardFeedResource/get/?source_url=%2Fellienorton_%2Ffavourites%2F&data=%7B%22options%22%3A%7B%22board_id%22%3A%221030902239642490899%22%2C%22board_url%22%3A%22%2Fellienorton_%2Ffavourites%2F%22%2C%22currentFilter%22%3A-1%2C%22field_set_key%22%3A%22react_grid_pin%22%2C%22filter_section_pins%22%3Atrue%2C%22sort%22%3A%22default%22%2C%22layout%22%3A%22default%22%2C%22page_size%22%3A25%2C%22redux_normalize_feed%22%3Atrue%7D%2C%22context%22%3A%7B%7D%7D&_=1699656554989"
	);
	const favouritesData = await favouritesRes.json();
	const favouritesPins = favouritesData.resource_response.data;

	return { pins, favouritesPins };
};
