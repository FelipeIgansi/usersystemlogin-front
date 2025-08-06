import type { User } from "./User"

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  resetPassword: (email: string, token: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, cpf: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}