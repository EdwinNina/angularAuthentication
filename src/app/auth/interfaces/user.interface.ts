export interface User {
  _id:       string;
  email:     string;
  name:      string;
  is_active: boolean;
  roles:     string[];
}
