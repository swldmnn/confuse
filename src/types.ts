export type Model = {
    options: Options
    constraints: Constraints
    evaluations: Evaluations
}

export type Options = {
    [key: string]: Option
}

export type Option = StringOption | NumberOption | ValueListOption

export type StringOption = {
    type: 'string'
    label: string
    value: string
}

export type NumberOption = {
    type: 'number'
    label: string
    min: number
    max: number
    intervall: number
    value: number
}

export type ValueListOption = {
    type: 'value_list'
    label: string
    values: ListValue[]
    value: ListValue
}

export type ListValue = number | string

export type Constraints = {
    [key: string]: Rule
}

export type Evaluations = {
    values: EvaluationValues
    rules: EvaluationRules
}

export type Rule = {
    description: string
    if: string
    then: string
}

export type EvaluationValues = {
    [key: string]: EvaluationValue
}

export type EvaluationValue = {
    description: string
    base: string
}

export type EvaluationRules = {
    [key: string]: Rule
}