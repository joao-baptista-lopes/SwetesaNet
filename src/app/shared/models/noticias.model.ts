export interface Root {
    sys: Sys
    total: number
    skip: number
    limit: number
    items: Item[]
    includes: Includes
  }
  
  export interface Sys {
    type: string
  }
  
  export interface Item {
    metadata: Metadata
    sys: Sys2
    fields: Fields
  }
  
  export interface Metadata {
    tags: any[]
  }
  
  export interface Sys2 {
    space: Space
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: Environment
    revision: number
    contentType: ContentType
    locale: string
  }
  
  export interface Space {
    sys: Sys3
  }
  
  export interface Sys3 {
    type: string
    linkType: string
    id: string
  }
  
  export interface Environment {
    sys: Sys4
  }
  
  export interface Sys4 {
    id: string
    type: string
    linkType: string
  }
  
  export interface ContentType {
    sys: Sys5
  }
  
  export interface Sys5 {
    type: string
    linkType: string
    id: string
  }
  
  export interface Fields {
    titulo: string
    descricao: string
    sumario: string
    imagem: Imagem
    slug: string
  }
  
  export interface Imagem {
    sys: Sys6
  }
  
  export interface Sys6 {
    type: string
    linkType: string
    id: string
  }
  
  export interface Includes {
    Asset: Asset[]
  }
  
  export interface Asset {
    metadata: Metadata2
    sys: Sys7
    fields: Fields2
  }
  
  export interface Metadata2 {
    tags: any[]
  }
  
  export interface Sys7 {
    space: Space2
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: Environment2
    revision: number
    locale: string
  }
  
  export interface Space2 {
    sys: Sys8
  }
  
  export interface Sys8 {
    type: string
    linkType: string
    id: string
  }
  
  export interface Environment2 {
    sys: Sys9
  }
  
  export interface Sys9 {
    id: string
    type: string
    linkType: string
  }
  
  export interface Fields2 {
    title: string
    file: File
  }
  
  export interface File {
    url: string
    details: Details
    fileName: string
    contentType: string
  }
  
  export interface Details {
    size: number
    image: Image
  }
  
  export interface Image {
    width: number
    height: number
  }
  