
export const LATEST_URL =
  "https://server.prod.awork.ge/v1/user/vacancies/filter/latest";
export const IMAGE_URL = (path: string) => {
  return `https://blobs.prod.awork.ge/original/${path}`;
};
export const FILTER_URL =
  "https://server.prod.awork.ge/v1/user/vacancies/filter";

export const VACANCY = (id:string)=>{return `https://server.prod.awork.ge/v1/user/vacancies/${id}`}

export const SUGGEST = (id:string)=>{return `https://server.prod.awork.ge/v1/user/vacancies/${id}/suggest`}

export const payload = (term?:string,catPayload?:string[], workPayload?:string[], empPayload?:string[], expPayload?:string[], salaryPayload?:number[], cityPayload?:string[]) => {
  return {
    find: {
      active_now: false,
      branch: "",
      brand: "",
      city: cityPayload?cityPayload:[],
      department: "",
      employment_type: empPayload?empPayload:[],
      experience: expPayload?expPayload:[],
      is_premium: false,
      ne_lat: null,
      ne_lng: null,
      place_id: "",
      published_from: null,
      salary_max: salaryPayload?salaryPayload[1]:null,
      salary_min: salaryPayload?salaryPayload[0]:0,
      saved: false,
      skills: [],
      sphere: "",
      spheres: catPayload?catPayload:[],
      sw_lat: null,
      sw_lng: null,
      term: term?term:"",
      user: "",
      vacancy_type: "",
      working_type: workPayload?workPayload:[],
    },
    order_by: "",
    page: 0,
    per_page: 100,
  };
};