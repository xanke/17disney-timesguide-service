'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    // await ctx.model.User.sync({ force: true })
    // await ctx.model.Userprofile.sync({ force: true })
    // await ctx.model.SocialOauth.sync({ force: true })

    // await ctx.model.Message.sync({ force: true })
    // await ctx.model.Timesguide.sync({ force: true })
    // await ctx.model.TimesguideChildren.sync({ force: true })
    // await ctx.model.Exchange.sync({ force: true })
    // await ctx.model.Contribute.sync({ force: true })

    ctx.body = '17disney-timesguide-service'
  }
}

module.exports = HomeController
