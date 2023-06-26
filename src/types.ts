export interface PayloadInterface {
    find: {
      active_now: boolean;
      branch: string;
      brand: string;
      city: never[];
      department: string;
      employment_type: never[];
      experience: never[];
      is_premium: boolean;
      ne_lat: null;
      ne_lng: null;
      place_id: string;
      published_from: null;
      salary_max: null;
      salary_min: number;
      saved: boolean;
      skills: never[];
      sphere: string;
      spheres: never[];
      sw_lat: null;
      sw_lng: null;
      term: string;
      user: string;
      vacancy_type: string;
      working_type: never[];
    };
    order_by: string;
      page: number;
      per_page: number;
  }
  

  export interface DataInterface {
    address: Address
    address_type: string
    allow_no_cv: boolean
    approximate_salary: ApproximateSalary
    brand: Brand
    business: Business
    card: any
    contract_terms: ContractTerms
    create_date: string
    department: any
    education: string
    employment_type: any
    end_date: string
    end_hour: any
    experience: Experience
    external_id: any
    external_url: string
    id: string
    info: Info
    invoice_number: string
    is_external: boolean
    is_free: boolean
    is_invoice: boolean
    is_paid: any
    jd: any
    languages: string[]
    name: string
    preview_images: any[]
    publish_date: string
    published: boolean
    regions: any[]
    share_preview: SharePreview
    short_id: string
    skills: any[]
    sphere: Sphere2
    start_date: string
    start_hour: any
    stats: Stats
    uid: string
    update_date: string
    vacancy_properties: VacancyProperties
    vacancy_settings: VacancySettings
    working_type: any
  }
  
  export interface Address {
    additional: string
    city: string
    country: string
    create_date: string
    description: string
    lat: number
    lng: number
    location: number[]
    main_text: string
    place_id: string
    plus_code: string
    postal_code: string
    room: string
    secondary_text: string
    street: string
    uid: string
    update_date: string
  }
  
  export interface ApproximateSalary {
    bonus: boolean
    max_salary: number
    min_salary: number
    text: string
  }
  
  export interface Brand {
    business_id: any
    description: string
    image: Image
    name: string
    slogan: string
    uid: string
  }
  
  export interface Image {
    etag: any
    height: any
    mimetype: string
    name: string
    og_name: string
    uid: string
    upload_date: string
    urls: Urls
    width: any
  }
  
  export interface Urls {
    original: string
  }
  
  export interface Business {
    address: Address2
    company_cover: any
    description: string
    image: Image2
    name: string
    official_name: string
    slogan: string
    social: Social
    spheres: Sphere[]
    uid: string
    website: string
  }
  
  export interface Address2 {
    additional: string
    city: string
    country: string
    create_date: string
    description: string
    lat: number
    lng: number
    location: number[]
    main_text: string
    place_id: string
    plus_code: string
    postal_code: string
    room: string
    secondary_text: string
    street: string
    uid: string
    update_date: string
  }
  
  export interface Image2 {
    etag: any
    height: any
    mimetype: string
    name: string
    og_name: string
    uid: string
    upload_date: string
    urls: Urls2
    width: any
  }
  
  export interface Urls2 {
    original: string
  }
  
  export interface Social {
    facebook: string
    instagram: string
    linkedin: string
    twitter: string
  }
  
  export interface Sphere {
    name: string
    uid: string
  }
  
  export interface ContractTerms {
    files: any[]
    prohibition: boolean
  }
  
  export interface Experience {
    date_type: string
    value: number
  }
  
  export interface Info {
    about_role: string
    about_role_eng: string
    additional: string
    requirements: string
    responsibilities: string
    text_only: string
  }
  
  export interface SharePreview {
    etag: any
    height: number
    mimetype: string
    name: string
    og_name: string
    uid: string
    upload_date: string
    urls: Urls3
    width: number
  }
  
  export interface Urls3 {
    original: string
  }
  
  export interface Sphere2 {
    name: string
    uid: string
  }
  
  export interface Stats {
    employee_count: number
    vacancy_count: number
  }
  
  export interface VacancyProperties {
    is_seasonal: boolean
    provides_accommodation: boolean
    provides_food: boolean
    provides_insurance: boolean
    provides_transportation: boolean
    provides_uniform: boolean
  }
  
  export interface VacancySettings {
    additional_docs: boolean
    additional_questioning: boolean
    analytics: boolean
    anonymous_price: number
    discount_on_next: number
    has_logo: boolean
    is_anonymous: boolean
    is_premium: boolean
    is_seasonal: boolean
    length: number
    on_main_page: number
    on_map: boolean
    personal_assistant: boolean
    premium_badge: boolean
    price: number
    priority: number
    search_priority: number
    setting_name: string
    social_media_marketing: boolean
    vacancies_on_email: boolean
    vacancies_on_platform: boolean
  }


  export interface ProfileItemInterface {
    id:number;
    title: string;
    position: string;
    content: string;
    startDate: string;
    endDate: string;
  }
  export interface ProfileSecondItemInterface {
    id:number;
    title: string;
  }
  