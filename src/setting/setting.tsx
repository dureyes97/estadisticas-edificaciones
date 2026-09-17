/** @jsx jsx */
import { React, jsx, css } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { TextInput, Select, Option } from 'jimu-ui'
import { type IMConfig } from '../config'

const settingStyle = css`
  .setting-inner {
    padding: 10px;
    font-size: 13px;
  }
`

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const serviceUrl = props.config?.serviceUrl || 'https://eqchoco.gestiondelriesgo.gov.co/server/rest/services/Hosted/inventario_de_edificaciones_/FeatureServer/0'
  const webmapId = props.config?.webmapId || '0bc13c7a26c54ce58f0d345a198f1fc2'
  const title = props.config?.title || 'Evaluación de Daños en Edificaciones'

  const onSettingChange = (key: string, value: any) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set(key, value)
    })
  }

  return (
    <div css={settingStyle} className="widget-setting-edificaciones">
      <SettingSection title="Configuración de Datos">
        <SettingRow label="Título del Panel">
          <TextInput
            size="sm"
            value={title}
            onChange={e => onSettingChange('title', e.target.value)}
          />
        </SettingRow>

        <SettingRow label="URL del Servicio de Edificaciones">
          <TextInput
            size="sm"
            value={serviceUrl}
            onChange={e => onSettingChange('serviceUrl', e.target.value)}
          />
        </SettingRow>

        <SettingRow label="ID del WebMap">
          <TextInput
            size="sm"
            value={webmapId}
            onChange={e => onSettingChange('webmapId', e.target.value)}
          />
        </SettingRow>
      </SettingSection>
    </div>
  )
}

export default Setting
