export async function fetchDataForAdmin(url) {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!nextUrl) {
        return null;
    }

    try {
        const response = await fetch(`${nextUrl}/${url}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export async function fetchReviewForAdmin(url) {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return null;
    }
    try {
        const response = await fetch(`${nextUrl}/${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}