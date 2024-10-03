export async function fetchData(url) {
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

export async function fetchDataNoStore(url) {
  const nextUrl = process.env.NEXT_PUBLIC_API_URL
  if (!nextUrl) {
    return null;
  }
  try {
    const response = await fetch(`${nextUrl}/${url}`, { cache: 'no-store' });

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

export async function fetchHappyClient(url) {
  const nextUrl = process.env.NEXT_PUBLIC_API_URL
  if (!nextUrl) {
    return null;
  }
  try {
    const response = await fetch(`${nextUrl}/${url}`, {
      next: { tags: ['happyClient'] }
    });
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

export async function fetchReview(url) {
  const nextUrl = process.env.NEXT_PUBLIC_API_URL
  if (!nextUrl) {
    return null;
  }
  try {
    const response = await fetch(`${nextUrl}/${url}`, {
      next: { tags: ['review'] }
    });
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
