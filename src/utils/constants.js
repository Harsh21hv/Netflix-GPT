export const LOGO_URL =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const USER_URL =
  'https://occ-0-7344-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRPhDNbxfvPHVFP56kT7oI1DpyMjd14ix52RDF7o8qn9Zy8UboO5MeYaz1IeUEr1w7sih47wXzwyVWIxuNjXAcapQE4T-cU.png?r=7c7';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
  }
};
export const IMG_CDN = 'https://image.tmdb.org/t/p/w500';

export const BG_URL =
  'https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_medium.jpg';

export const SUPPORTED_LANG = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi' },
  { identifier: 'spanish', name: 'Spanish' },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
