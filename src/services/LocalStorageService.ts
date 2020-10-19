
export class LocalStorageService {
  static clearStore(): void {
    window.localStorage.clear();
  }

  static setToken(tokenId: string): void {
    window.localStorage.setItem(
      "authToken",
      tokenId
    );
  }

  static getToken(): string {
    const jsonState = window.localStorage.getItem("authToken");

    if (!jsonState) {
      return null;
    }

    return jsonState || null;
  }
}
