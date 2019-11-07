export const TOKEN_KEY = "TI-E@TOKEN";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) != null;

export const login = token => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
