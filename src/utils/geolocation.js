export function getUserLocation(callback) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          callback(userLocation);
        },
        (error) => {
          console.error("Error getting user location:", error);
          callback(null);
        }
      );
    } else {
      console.error("Geolocation not available in this browser.");
      callback(null);
    }
  }