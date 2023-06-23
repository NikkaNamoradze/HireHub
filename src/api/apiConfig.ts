import { useState } from "react";

export const LATEST_URL =
  "https://server.prod.awork.ge/v1/user/vacancies/filter/latest";
export const IMAGE_URL = (path: string) => {
  return `https://blobs.prod.awork.ge/original/${path}`;
};



export const payload = () => {
  return {
    find: {
      active_now: false,
      branch: "",
      brand: "",
      city: [],
      department: "",
      employment_type: [],
      experience: [],
      is_premium: false,
      ne_lat: null,
      ne_lng: null,
      place_id: "",
      published_from: null,
      salary_max: null,
      salary_min: 0,
      saved: false,
      skills: [],
      sphere: "",
      spheres: [],
      sw_lat: null,
      sw_lng: null,
      term: "",
      user: "",
      vacancy_type: "",
      working_type: [],
    },
    order_by: "",
    page: 0,
    per_page: 100,
  };
};
