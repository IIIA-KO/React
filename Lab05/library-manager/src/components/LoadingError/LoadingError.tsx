export const LoadingError = ({ isLoading, error }: { isLoading: boolean, error: any }) => {
    if (isLoading) return <div>Loading...</div>
    if (error) {
        if ('status' in error) {
            return <div>Error: {String(error.data)}</div>
        }
        return <div>Error: {error.message}</div>
    }

    return <div>No data</div>
}