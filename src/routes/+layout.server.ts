import type { LayoutServerLoad } from "./$types";
import { getPosts } from "$lib/utils/posts";

export const prerender = true;

interface Pin {
	ad_match_reason: number;
	sponsorship: null;
	embed: null;
	is_quick_promotable: boolean;
	promoter: null;
	view_tags: any[];
	price_value: number;
	is_eligible_for_pdp: boolean;
	is_oos_product: boolean;
	is_whitelisted_for_tried_it: boolean;
	native_creator: null;
	shopping_flags: any[];
	debug_info_html: null;
	is_native: boolean;
	dominant_color: string;
	carousel_data: null;
	promoted_is_removable: boolean;
	videos: null;
	board: {
		name: string;
		url: string;
		is_collaborative: boolean;
		id: string;
		followed_by_me: boolean;
		layout: string;
		collaborated_by_me: boolean;
		owner: {
			id: string;
			is_ads_only_profile: boolean;
			explicitly_followed_by_me: boolean;
			username: string;
			image_large_url: string;
			blocked_by_me: boolean;
			image_small_url: string;
			ads_only_profile_site: null;
			type: string;
			full_name: string;
		};
		type: string;
		image_thumbnail_url: string;
		privacy: string;
	};
	domain: string;
	repin_count: number;
	created_at: string;
	tracking_params: string;
	image_signature: string;
	images: {
		"170x": {
			width: number;
			height: number;
			url: string;
		};
		"136x136": {
			width: number;
			height: number;
			url: string;
		};
		"236x": {
			width: number;
			height: number;
			url: string;
		};
		"474x": {
			width: number;
			height: number;
			url: string;
		};
		"736x": {
			width: number;
			height: number;
			url: string;
		};
		orig: {
			width: number;
			height: number;
			url: string;
		};
	};
	is_eligible_for_web_closeup: boolean;
	title: string;
	video_status: null;
	comment_count: number;
	is_eligible_for_related_products: boolean;
	done_by_me: boolean;
	should_open_in_stream: boolean;
	access: string[];
	grid_description: string;
	price_currency: string;
	rich_summary: {
		products: any[];
		display_description: string;
		favicon_link: string;
		display_name: string;
		apple_touch_icon_link: string;
		type_name: string;
		url: string;
		id: string;
		actions: any[];
		type: string;
		favicon_images: {
			orig: string;
			"50x": string;
		};
		apple_touch_icon_images: {
			orig: string;
		};
		site_name: string;
	};
	is_promoted: boolean;
	campaign_id: null;
	grid_title: string;
	creator_analytics: null;
	is_playable: boolean;
	call_to_action_text: null;
	is_repin: boolean;
	manual_interest_tags: null;
	attribution: null;
	insertion_id: null;
	description_html: string;
	is_eligible_for_pdp_plus: boolean;
	video_status_message: null;
	additional_hide_reasons: any[];
	is_uploaded: boolean;
	pinner: {
		id: string;
		is_ads_only_profile: boolean;
		explicitly_followed_by_me: boolean;
		username: string;
		image_large_url: string;
		blocked_by_me: boolean;
		image_small_url: string;
		ads_only_profile_site: null;
		type: string;
		full_name: string;
	};
	image_crop: {
		min_y: number;
		max_y: number;
	};
	privacy: string;
	reaction_counts: {
		"1": number;
	};
	method: string;
	comments: {
		uri: string;
		data: any[];
		bookmark: null;
	};
	story_pin_data: null;
	promoted_lead_form: null;
	description: string;
	aggregated_pin_data: {
		creator_analytics: null;
		id: string;
		did_it_data: {
			recommend_scores: {
				score: number;
				count: number;
			}[];
			rating: number;
			videos_count: number;
			recommended_count: number;
			type: string;
			user_count: number;
			tags: any[];
			images_count: number;
			details_count: number;
			responses_count: number;
		};
		is_shop_the_look: boolean;
		has_xy_tags: boolean;
		aggregated_stats: {
			saves: number;
			done: number;
		};
	};
	alt_text: null;
	id: string;
	promoted_is_lead_ad: boolean;
	product_pin_data: null;
	is_stale_product: boolean;
	link: string;
	story_pin_data_id: null;
	type: string;
	is_downstream_promotion: boolean;
	has_required_attribution_provider: boolean;
	is_video: boolean;
}

function getPins(res: any) {
	return res.resource_response.data.filter((t: any) => t.id);
}

export const load: LayoutServerLoad = async ({ route, fetch }) => {
	const posts = await getPosts();

	const res = await fetch(
		"https://pinterest.com/resource/UserPinsResource/get/?source_url=%2Fellienorton_%2Fpins%2F&data=%7B%22options%22%3A%7B%22is_own_profile_pins%22%3Atrue%2C%22username%22%3A%22ellienorton_%22%2C%22field_set_key%22%3A%22grid_item%22%2C%22pin_filter%22%3Anull%7D%2C%22context%22%3A%7B%7D%7D&_=1699632193955"
	);
	const data = await res.json();
	let pins = getPins(data);

	const favouritesRes = await fetch(
		"https://pinterest.com/resource/BoardFeedResource/get/?source_url=%2Fellienorton_%2Ffavourites%2F&data=%7B%22options%22%3A%7B%22board_id%22%3A%221030902239642490899%22%2C%22board_url%22%3A%22%2Fellienorton_%2Ffavourites%2F%22%2C%22currentFilter%22%3A-1%2C%22field_set_key%22%3A%22react_grid_pin%22%2C%22filter_section_pins%22%3Atrue%2C%22sort%22%3A%22default%22%2C%22layout%22%3A%22default%22%2C%22page_size%22%3A25%2C%22redux_normalize_feed%22%3Atrue%7D%2C%22context%22%3A%7B%7D%7D&_=1699656554989"
	);
	const favouritesData = await favouritesRes.json();
	const favouritesPins = getPins(favouritesData);

	// Remove favourites from pins
	pins = pins.filter(
		(pin: Pin) => !favouritesPins.find((f: Pin) => f.id === pin.id)
	);

	return { pins, favouritesPins, posts };
};
