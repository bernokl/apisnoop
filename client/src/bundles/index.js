import { composeBundles } from 'redux-bundler'

import colours from './colours'
import config from './config'
import currentReleaseResource from './current-release-resource'
import endpointsResource from './endpoints-resource'
import endpoints from './endpoints'
import filter from './filter'
import releases from './releases'
import releasesIndexResource from './releases-index-resource'
import routes from './routes'
import sunburst from './sunburst'
import summary from './summary'
import testsResource from './tests-resource'
import tests from './tests'
import useragentsResource from './useragents-resource'
import useragents from './useragents'
import zoom from './zoom'

export default composeBundles(
  colours,
  config,
  currentReleaseResource,
  endpointsResource,
  endpoints,
  filter,
  releases,
  releasesIndexResource,
  routes,
  sunburst,
  summary,
  testsResource,
  tests,
  useragentsResource,
  useragents,
  zoom
)
