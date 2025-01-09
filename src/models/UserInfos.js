export class UserInfos {
  constructor(data) {
    if (data) this.FormatData(data)
  }

  FormatData(data) {
    if (
      typeof data.userInfos.firstName === 'string' &&
      typeof data.userInfos.lastName === 'string' &&
      typeof data.userInfos.age === 'number' &&
      (typeof data.score === 'number' || typeof data.todayScore === 'number')
    ) {
      this.firstName = data.userInfos.firstName
      this.lastName = data.userInfos.lastName
      this.age = data.userInfos.age
      if (data.score) {
        this.score = data.score * 100
      } else if (data.todayScore) {
        this.score = data.todayScore * 100
      }
    }
  }
}
