import Alpine from 'alpinejs'

import '../styles/common.pcss'
import '../styles/main.pcss'

import { initDesigner } from './designer'

// The resume could be also in another format, like YAML or JS,
// just change the import to reflect the new filename
// and eventually add a new loader to vite.config.js
import resume from '../resume.json'

initDesigner()

Alpine.data('resume', () => ({ resume }))
Alpine.start()
