import * as utils from 'utils'

const { axios } = utils

function getSceneInfo(id: number) {
  return axios({
    url: '/api/paper',
    params: {
      sceneId: id,
    },
  }).then((res: object) => res).catch((err: object) => err)
}

function proxyGithubApi() {
  return axios({
    url: '/api/users',
  }).then((res: object) => res).catch((err: object) => err)
}

export default { getSceneInfo, proxyGithubApi }
