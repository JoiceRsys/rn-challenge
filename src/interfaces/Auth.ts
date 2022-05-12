export interface LoginMutationAPIData {
  loginWithEmail: LoginWithEmail;
}

export interface LoginWithEmail {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  facebookId: null;
  googleId: null;
  appleId: null;
}

export interface MutationErrorAPIResponse {
  message: string;
  locations: Location[];
  path: string[];
  extensions: Extensions;
}

export interface Extensions {
  code: string;
  exception: Exception;
}

export interface Exception {
  stacktrace: string[];
}

export interface Location {
  line: number;
  column: number;
}
