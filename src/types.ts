export interface IInput {
  [key: string]: string | string[] | IInput[] | IInput
}
export type InputType = string | string[] | IInput[] | IInput

export type ghEnvironmentType = {
  var: Record<string, string>
  secret: Record<string, string>
}
