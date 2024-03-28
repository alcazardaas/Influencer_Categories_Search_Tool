type Match = {
  id: number;
  score: number;
  match_score: number;
  influencer_id: number;
};

type Category = {
  id: number;
  name: string;
  similarity: number;
};

type Influencer = {
  id: number;
  name: string;
  first_name: string | null;
  description: string;
  avatar_url: string;
  country: string;
  address: string;
  created_at: number;
  updated_at: number;
  merge_fields: any | null; // Could be more specific if the structure is known
  last_name: string | null;
  phone_number: string | null;
  gender: string | null; // Could also be 'male' | 'female' | 'non-binary' | null if the set of possible values is known
  lang: string;
  rating: any | null; // Could be more specific if the structure is known
  tags: any | null; // Could be more specific if the structure is known
  verified: boolean | null;
  agent_email: string | null;
  shipping_address: string | null;
  processed_features: object; // Could be more specific if the structure is known
  type: string;
  community_size: number;
  has_email: boolean;
  in_community: boolean;
  categories: Category[];
  blog_id: number | null;
  twitter_id: number | null;
  instagram_id: number | null;
  youtube_id: number | null;
  pinterest_id: number | null;
  twitch_id: number | null;
  tiktok_id: number | null;
  list_entry_ids: number[]; // Assuming it's an array of numbers, adjust if necessary
};

type Blog = {
  id: number;
  title: string;
  description: string | null;
  visits: number;
  page_rank: number | null;
  alexa_rank: number;
  category: number;
  average_facebook_shares: number | null;
  recommended_price: number | null;
  article_ids: number[];
};

type Article = {
  id: number;
  title: string;
  description: string;
  timestamp: number;
  facebook_shares: number;
  impressions: number;
  reach: number;
};

type Instagram = {
  id: number;
  full_name: string;
  bio: string;
  followers: number;
  engagement_rate: number | null;
  average_likes: number | null;
  average_comments: number | null;
  verified: boolean;
  recommended_price: number | null;
  audience: {
    fake_account: {
      total: number;
      confident: boolean;
      values: {
        fake: number;
        real: number;
      };
    };
    age_image_extractor: {
      total: number;
      confident: boolean;
      values: {
        "0-17": number;
        "18-20": number;
        "21-24": number;
        "25-34": number;
        "35-54": number;
      };
    };
    gender_image_extractor: {
      total: number;
      confident: boolean;
      values: {
        male: number;
        female: number;
      };
    };
    legal_drinking_age: {
      total: number;
      confident: boolean;
      values: {
        "21+": number;
        "0-20": number;
      };
    };
  };
  media_ids: number[];
};

type InstagramMedia = {
  id: number;
  text: string;
  type: "picture" | "video";
  location_name: string;
  timestamp: number;
  likes: number;
  comments: number;
  post_id: string;
  views: number;
  thumbnail_url: string;
  tagged_profiles: string[] | null;
  mentioned_profiles: string[] | null;
  impressions: number;
  reach: number;
  media_type: "carousel" | "reel";
  hidden_likes: boolean;
  plays: number;
};

type Twitter = {
  id: number;
  bio: string;
  followers: number;
  engagement_rate: number | null;
  average_retweets: number | null;
  average_favorites: number | null;
  recommended_price: number | null;
  verified: boolean;
  tweet_ids: number[];
};

type Tweet = {
  id: number;
  content: string;
  timestamp: number;
  retweets: number;
  favorites: number;
  comments: number;
  post_id: string;
  impressions: number;
  reach: number;
};

type YouTube = {
  id: number;
  description: string;
  followers: number;
  views: number;
  engagement_rate: number;
  average_likes: number;
  average_views: number;
  average_comments: number | null;
  verified: boolean;
  recommended_price: number;
  audience: null; // The audience field is set to null in the provided data
  video_ids: number[];
};

type YouTubeVideo = {
  id: number;
  name: string;
  description: string;
  link: string;
  timestamp: number;
  views: number;
  comments: number;
  likes: number;
  dislikes: number;
  post_id: string;
  impressions: number;
  reach: number;
};

type TikTok = {
  id: number;
  description: string;
  nickname: string;
  followers: number;
  followings: number;
  total_likes: number;
  total_videos: number;
  engagement_rate: number;
  average_comments: number;
  average_likes: number;
  average_shares: number;
  average_plays: number;
  verified: boolean;
  video_ids: number[];
};

type TikTokVideo = {
  id: number;
  name: string;
  link: string;
  thumbnail_url: string;
  comments: number;
  likes: number;
  timestamp: number;
  post_id: string;
  plays: number;
  shares: number;
  tags: string[];
  mentioned_profiles: null;
  reach: number;
  impressions: number;
};

type PinterestProfile = {
  id: number;
  followers: number;
  follows: number;
  bio: string;
  engagement_rate: number;
  average_likes: number | null;
  average_comments: number | null;
  average_repins: number | null;
  average_saves: number | null;
  recommended_price: number | null;
  verified: boolean;
  pin_ids: number[];
};

type Pin = {
  id: number;
  title: string;
  description: string;
  links: string;
  timestamp: number;
  comments: number;
  likes: number;
  saves: number;
  repins: number;
  post_id: string;
  impressions: number;
  reach: number;
};

type Meta = {
  total: number;
  totalPages: number;
  maxScore: number;
};
