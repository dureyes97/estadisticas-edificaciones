import { type ImmutableObject } from 'jimu-core'

export interface Config {
  serviceUrl: string
  webmapId: string
  portalUrl: string
  title: string
  enableFilters: boolean
  defaultView: 'damage' | 'dpto' | 'mpio' | 'type'
}

export type IMConfig = ImmutableObject<Config>
