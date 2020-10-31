export type Variant = 'primary' | 'success' | 'error' | 'info'
export type Align = 'left' | 'right' | 'center'

export interface IHeader {
    property: string
    text: string
    align?: Align
}

export interface IPageSettings {
    page: number
    limit: number
    total: number
    pages: number
}

export interface ISidebarLink {
    title: string
    href: string
    icon: string | string[]
    items?: ISidebarLink[]
}