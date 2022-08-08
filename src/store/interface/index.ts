export interface RootState {}

export interface UserState {
  token?: string | null
}

export interface AllState extends RootState {
  user: UserState
}
