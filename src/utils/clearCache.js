import Cookies from "universal-cookie"

// selalu update versiBuild + 1 agar otomatis hard refresh
let versiBuild = 83

const cookies = new Cookies()

export function SendVersiBuild() {
  let oldVersi = cookies.get("versi-build")

  if (versiBuild !== Number(oldVersi)) {
    cookies.set("versi-build", 1)
  }

  if (versiBuild !== Number(oldVersi)) {
    return ForceClearCache()
  }
}

export function ForceClearCache() {
  cookies.set("versi-build", versiBuild)
  window.location.reload(true)
}
