import { Controller, Get } from '@nestjs/common';
import { supabase }  from '../supabase.provider';
import { searchResponse, userTweetsResponse, userInfoResponse } from './sampleResponses'
import { RoutesService } from './routes.service'

@Controller('routes')
export class RoutesController {
    constructor(private readonly routesService: RoutesService) {}

    @Get('search')
    search() {
        return this.routesService.search()
    }

    @Get('user-tweets')
    userTweets() {
        return this.routesService.userTweets()
    }

    @Get('user-info')
    async userInfo() {
        return this.routesService.userInfo()
    }
}
