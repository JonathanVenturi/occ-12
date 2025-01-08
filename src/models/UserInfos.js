export class UserInfos {
  constructor(data) {
    if (data) {
      this.firstName = data.userInfos.firstName
      this.lastName = data.userInfos.lastName
      this.age = data.userInfos.age

      if (data.score) {
        this.score = data.score * 100
      } else if (data.todayScore) {
        this.score = data.todayScore * 100
      }
    }
    return this
  }
}
