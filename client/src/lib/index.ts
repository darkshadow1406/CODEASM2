export const getData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Lỗi tìm nạp dữ liệu" + response?.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Lỗi khi tìm nạp dữ liệu", error);
    throw error;
  }
};
