if (typeof browser === "undefined") {
  browser = typeof chrome !== "undefined" ? chrome : null;
}

const HOST = "https://lawrencehook.com/rys/";

const SECTIONS = [];

const TIMED_SETTINGS = {
  nextTimedChange: false,
  nextTimedValue: true,
};

const SCHEDULE_SETTINGS = {
  schedule: false,
  scheduleTimes: "9:00a-5:00p",
  scheduleDays: "mo,tu,we,th,fr",
};

const OTHER_SETTINGS = {
  global_enable: true,
  dark_mode: false,
  log_enabled: true,
  ...TIMED_SETTINGS,
  ...SCHEDULE_SETTINGS,
};

const DEFAULT_SETTINGS = SECTIONS.reduce(
  (acc, fieldset) => {
    fieldset.options.forEach(
      (option) => (acc[option.id] = option.defaultValue)
    );
    return acc;
  },
  { ...OTHER_SETTINGS }
);

// For import/export
const idToShortId = {
  global_enable: "0",
  dark_mode: "1",
  log_enabled: "2",
  remove_homepage: "3",
  remove_sidebar: "4",
  remove_end_of_video: "5",
  remove_header: "6",
  remove_all_but_one: "7",
  remove_extra_rows: "8",
  remove_infinite_scroll: "9",
  disable_play_on_hover: "10",
  remove_left_nav_bar: "11",
  remove_logo_link: "12",
  remove_home_link: "13",
  remove_explore_link: "14",
  remove_shorts_link: "15",
  remove_subscriptions_link: "16",
  remove_quick_links_section: "17",
  remove_sub_section: "18",
  remove_explore_section: "19",
  remove_more_section: "20",
  auto_skip_ads: "21",
  disable_autoplay: "22",
  disable_ambient_mode: "23",
  disable_annotations: "24",
  disable_playlist_autoplay: "25",
  normalize_shorts: "26",
  remove_entire_sidebar: "27",
  remove_info_cards: "28",
  remove_overlay_suggestions: "29",
  remove_play_next_button: "30",
  remove_menu_buttons: "31",
  remove_chat: "32",
  remove_embedded_more_videos: "33",
  remove_comments: "34",
  remove_non_timestamp_comments: "35",
  remove_comment_usernames: "36",
  remove_comment_profiles: "37",
  remove_comment_replies: "38",
  remove_comment_upvotes: "39",
  remove_search_suggestions: "40",
  remove_search_promoted: "41",
  remove_shorts_results: "42",
  remove_extra_results: "43",
  remove_thumbnail_mouseover_effect: "44",
  remove_sub_shorts: "45",
  remove_sub_live: "46",
  remove_sub_upcoming: "47",
  remove_sub_premiere: "48",
  redirect_to_subs: "49",
  redirect_to_wl: "50",
  redirect_to_library: "51",
  redirect_off: "52",
  menu_timer: "53",
  remove_all_shorts: "54",
  remove_video_thumbnails: "55",
  search_engine_mode: "56",
  remove_notif_bell: "57",
  schedule: "58",
  scheduleTimes: "59",
  scheduleDays: "60",
  nextTimedChange: "61",
  nextTimedValue: "62",
  remove_settings_section: "63",
  remove_footer_section: "64",
  remove_infinite_scroll_search: "65",
  autofocus_search: "66",
  remove_playlist_suggestions: "67",
  reverse_channel_video_list: "68",
  expand_description: "69",
  remove_context: "70",
  remove_sub_vods: "71",
  disable_channel_autoplay: "72",
  remove_vid_description: "73",
  blur_video_thumbnails: "74",
  remove_extra_sidebar_tags: "75",
};

const shortIdToId = Object.entries(idToShortId).reduce((acc, [id, shortId]) => {
  acc[shortId] = id;
  return acc;
}, {});

function sectionNameToUrl(name) {
  const sectionPath = name
    .toLowerCase()
    .replaceAll(" - ", "_")
    .replaceAll(" ", "_");

  return HOST + "features/" + sectionPath + "/";
}
