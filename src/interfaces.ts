export enum UserTypeEnum {
  RECRUITER = 'RECRUITER',
  CANDIDATE = 'CANDIDATE',
}

export enum JobTypeEnum {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  FREELANCE = 'FREELANCE',
}

export enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum WorkEnvironmentPreferenceEnum {
  HYBRID = 'HYBRID',
  WORK_FROM_HOME = 'WORK_FROM_HOME',
  ON_SITE = 'ON_SITE',
}

export enum DegreeNameEnum {
  TENTH = '10th',
  TWELFTH = '12th',
  DIPLOMA_CERTIFICATE = 'DIPLOMA_CERTIFICATE',
  BACHELORS = 'BACHELORS',
  MASTERS = 'MASTERS',
  PHD = 'PHD',
}

export enum IndustryEnum {
  // Broad IT and Technology Category
  IT = 'IT',
  SOFTWARE = 'SOFTWARE',
  TELECOMMUNICATIONS = 'TELECOMMUNICATIONS',
  CYBERSECURITY = 'CYBERSECURITY',
  CLOUD_COMPUTING = 'CLOUD_COMPUTING',
  ARTIFICIAL_INTELLIGENCE = 'ARTIFICIAL_INTELLIGENCE',
  DATA_SCIENCE = 'DATA_SCIENCE',
  IT_SUPPORT = 'IT_SUPPORT',
  WEB_DEVELOPMENT = 'WEB_DEVELOPMENT', // Includes Frontend, Backend, and Full Stack

  // Broad Finance Category
  FINANCE = 'FINANCE',
  BANKING = 'BANKING',
  INSURANCE = 'INSURANCE',
  ACCOUNTING = 'ACCOUNTING',
  INVESTMENT = 'INVESTMENT',

  // Broad Healthcare Category
  HEALTHCARE = 'HEALTHCARE',
  PHARMACEUTICALS = 'PHARMACEUTICALS',
  BIOTECHNOLOGY = 'BIOTECHNOLOGY',
  MEDICAL_DEVICES = 'MEDICAL_DEVICES',
  HOSPITALS = 'HOSPITALS',

  // Broad Manufacturing and Construction Category
  MANUFACTURING = 'MANUFACTURING',
  CONSTRUCTION = 'CONSTRUCTION',
  AUTOMOTIVE = 'AUTOMOTIVE',
  AEROSPACE = 'AEROSPACE',
  ELECTRONICS = 'ELECTRONICS',

  // Broad Retail and E-commerce Category
  RETAIL = 'RETAIL',
  E_COMMERCE = 'E_COMMERCE',
  WHOLESALE = 'WHOLESALE',
  FASHION = 'FASHION',
  FOOD_BEVERAGE = 'FOOD_BEVERAGE',

  // Broad Media and Entertainment Category
  MEDIA = 'MEDIA',
  ENTERTAINMENT = 'ENTERTAINMENT',
  MUSIC = 'MUSIC',
  FILM_TV = 'FILM_TV',
  PUBLISHING = 'PUBLISHING',

  // Broad Energy and Environment Category
  ENERGY = 'ENERGY',
  ENVIRONMENTAL = 'ENVIRONMENTAL',
  RENEWABLES = 'RENEWABLES',
  OIL_GAS = 'OIL_GAS',
  MINING = 'MINING',

  // Broad Education Category
  EDUCATION = 'EDUCATION',
  E_LEARNING = 'E_LEARNING',
  RESEARCH = 'RESEARCH',

  // Broad Consulting Category
  CONSULTING = 'CONSULTING',
  LEGAL = 'LEGAL',
  ACCOUNTANCY = 'ACCOUNTANCY',

  // Broad Logistics and Transportation Category
  LOGISTICS = 'LOGISTICS',
  TRANSPORTATION = 'TRANSPORTATION',
  MARITIME = 'MARITIME',
  AVIATION = 'AVIATION',

  // Other Major Industries
  GOVERNMENT = 'GOVERNMENT',
  NON_PROFIT = 'NON_PROFIT',
  REAL_ESTATE = 'REAL_ESTATE',
  HOSPITALITY = 'HOSPITALITY',
  SECURITY = 'SECURITY',
  ARCHITECTURE = 'ARCHITECTURE',
  CHEMICAL = 'CHEMICAL',
  SPORTS = 'SPORTS',
  AGRICULTURE = 'AGRICULTURE',
  TOYS_GAMES = 'TOYS_GAMES',
  TRAVEL_TOURISM = 'TRAVEL_TOURISM',
  WASTE_MANAGEMENT = 'WASTE_MANAGEMENT',

  // Catch-All Category
  OTHER = 'OTHER',
}

export enum CurrencyTypeEnum {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  INR = 'INR', // Indian Rupee
  JPY = 'JPY', // Japanese Yen
  CAD = 'CAD', // Canadian Dollar
  AUD = 'AUD', // Australian Dollar
  CHF = 'CHF', // Swiss Franc
  CNY = 'CNY', // Chinese Yuan
  RUB = 'RUB', // Russian Ruble
  BRL = 'BRL', // Brazilian Real
  ZAR = 'ZAR', // South African Rand
  SGD = 'SGD', // Singapore Dollar
  MXN = 'MXN', // Mexican Peso
  NZD = 'NZD', // New Zealand Dollar
  SEK = 'SEK', // Swedish Krona
  NOK = 'NOK', // Norwegian Krone
  KRW = 'KRW', // South Korean Won
  HKD = 'HKD', // Hong Kong Dollar
  TRY = 'TRY', // Turkish Lira
  SAR = 'SAR', // Saudi Riyal
  AED = 'AED', // United Arab Emirates Dirham
  TWD = 'TWD', // Taiwan Dollar
  MYR = 'MYR', // Malaysian Ringgit
  IDR = 'IDR', // Indonesian Rupiah
  THB = 'THB', // Thai Baht
  PHP = 'PHP', // Philippine Peso
  VND = 'VND', // Vietnamese Dong
  BDT = 'BDT', // Bangladeshi Taka
}

export enum JobStatusEnum {
  OPENING = 'OPENING',
  CLOSED = 'CLOSED',
  PENDING = 'PENDING',
  FILLED = 'FILLED',
  CANCELLED = 'CANCELLED',
  ON_HOLD = 'ON_HOLD',
  DRAFT = 'DRAFT',
  ARCHIVED = 'ARCHIVED',
}

export enum ApplicationStatusEnum {
  SUBMITTED = 'SUBMITTED',
  REVIEWING = 'REVIEWING',
  INTERVIEW = 'INTERVIEW',
  OFFERED = 'OFFERED',
  REJECTED = 'REJECTED',
}

export enum EventNameEnum {
  PROFILE_UPDATED = 'PROFILE_UPDATED',
  JOB_APPLIED = 'JOB_APPLIED',
  JOB_CREATED = 'JOB_CREATED',
}
