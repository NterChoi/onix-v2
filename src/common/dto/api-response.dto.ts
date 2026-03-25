export class ApiResponseDto<T> {
  success: boolean;
  data: T | null;
  message: string;
  timestamp: string;

  constructor(data: T | null, message = 'success') {
    this.success = data !== null;
    this.data = data;
    this.message = message;
    this.timestamp = new Date().toISOString();
  }

  static ok<T>(data: T, message = 'success'): ApiResponseDto<T> {
    return new ApiResponseDto(data, message);
  }

  static fail(message: string): ApiResponseDto<null> {
    return new ApiResponseDto(null, message);
  }
}
