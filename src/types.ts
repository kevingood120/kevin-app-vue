 export type Variant = 'primary' | 'success' | 'error' | 'info'
 export type Align = 'left' | 'right' | 'center'

 export interface IHeader {
     property: string
     text: string
     align?: Align
 }