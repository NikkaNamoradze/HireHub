
export const LATEST_URL =
  "https://server.prod.awork.ge/v1/user/vacancies/filter/latest";
export const IMAGE_URL = (path: string) => {
  return `https://blobs.prod.awork.ge/original/${path}`;
};
export const FILTER_URL =
  "https://server.prod.awork.ge/v1/user/vacancies/filter";


export const payload = (catPayload:string[], workPayload:string[], empPayload:string[], expPayload:string[], salaryPayload:number[], cityPayload:string[]) => {
  return {
    find: {
      active_now: false,
      branch: "",
      brand: "",
      city: cityPayload,
      department: "",
      employment_type: empPayload,
      experience: expPayload,
      is_premium: false,
      ne_lat: null,
      ne_lng: null,
      place_id: "",
      published_from: null,
      salary_max: salaryPayload[1],
      salary_min: salaryPayload[0],
      saved: false,
      skills: [],
      sphere: "",
      spheres: catPayload,
      sw_lat: null,
      sw_lng: null,
      term: "",
      user: "",
      vacancy_type: "",
      working_type: workPayload,
    },
    order_by: "",
    page: 0,
    per_page: 100,
  };
};