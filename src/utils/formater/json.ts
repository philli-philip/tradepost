export function extractJSON(responseText: string): any | null {
  try {
    // Attempt to parse the entire response as JSON first
    return JSON.parse(responseText);
  } catch (jsonError) {
    // If that fails, look for JSON within the string
    const jsonStart = responseText.indexOf("{");
    const jsonEnd = responseText.lastIndexOf("}");

    if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
      const jsonString = responseText.substring(jsonStart, jsonEnd + 1);
      try {
        return JSON.parse(jsonString);
      } catch (innerJsonError) {
        console.error("Error parsing extracted JSON:", innerJsonError);
        return null;
      }
    } else {
      console.error("No JSON found in response.");
      return null;
    }
  }
}
