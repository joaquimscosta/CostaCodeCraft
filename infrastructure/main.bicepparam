using 'main.bicep'
// the docker image name will be passed in as a parameter
param dockerImageName = readEnvironmentVariable('DOCKER_IMAGE_NAME')
param appName = 'costacodecraft'
param environmentType = 'prod'
param hostNames = [
  'costacodecraft.com'
  'www.costacodecraft.com'
]
param commonTags = {
  app: appName
  environment: 'Production'
  purpose: 'Personal Website'
}
