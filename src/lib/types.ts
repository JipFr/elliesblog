export interface PinImage {
	width: number;
	height: number;
	url: string;
}

export interface Pin {
	is_native: boolean;
	dominant_color: string;
	videos: null;
	domain: string;
	created_at: string;
	images: {
		"170x": PinImage;
		"136x136": PinImage;
		"236x": PinImage;
		"474x": PinImage;
		"736x": PinImage;
		orig: PinImage;
	};
	title: string;
	is_playable: boolean;
	description_html: string;
	is_uploaded: boolean;
	pinner: {
		id: string;
		username: string;
		image_large_url: string;
		image_small_url: string;
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
	description: string;
	alt_text: null;
	id: string;
	promoted_is_lead_ad: boolean;
	link: string;
	type: string;
	is_video: boolean;
}

export interface PostMeta {
	title: string;
	title_short: string;
	slug: string;
	date: string;
	thumbnail: string;
}

export interface Post {
	meta: PostMeta;
	md: string;
	html: string;
}

export interface MetaProps {
	title?: string;
	description?: string;
	image?: string;
	subheading?: string;
	hideAbout?: boolean;
}
