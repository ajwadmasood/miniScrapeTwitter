import { Injectable } from '@nestjs/common';
import { supabase }  from '../supabase.provider';
import { searchResponse, userTweetsResponse, userInfoResponse } from './sampleResponses'

@Injectable()
export class RoutesService {
    async search() {
        try {
            const response = searchResponse
            const result = await supabase
                .from('api_logs_new')
                .insert({
                    endpoint:'Get:/twitter/search',
                    response_code: response.status === 'ok' ? 200 : 500
                    })
                .select()
                .single()
            return response.body;
        } catch (error) {
            return {
                statusCode: 500,
                errorCode: 'E107',
                message: 'Something went wrong, Please try again'
            }
        }
    }

    async userTweets() {
        try {
            const response = userTweetsResponse
            const result = await supabase
                .from('api_logs_new')
                .insert({
                    endpoint:'Get:/twitter/user-tweets',
                    response_code: response.status === 'ok' ? 200 : 500
                    })
                .select()
                .single()
            return response.body;
        } catch (error) {
            return {
                statusCode: 500,
                errorCode: 'E107',
                message: 'Something went wrong, Please try again'
            }
        }
    }

    async userInfo() {
        try {
            const response = userInfoResponse
            const result = await supabase
                .from('api_logs_new')
                .insert({
                    endpoint:'Get:/twitter/user-info',
                    response_code: response.status === 'ok' ? 200 : 500
                    })
                .select()
                .single()
            return response.body;
        } catch (error) {
            return {
                statusCode: 500,
                errorCode: 'E107',
                message: 'Something went wrong, Please try again'
            }
        }
    }
}
