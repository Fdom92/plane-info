export interface ApiError {
    error: {
        code: string,
        message: string,
        context: {
            flight_date: [
                {
                    key: string;
                    message: string;
                }
            ]
        };
    };
}
