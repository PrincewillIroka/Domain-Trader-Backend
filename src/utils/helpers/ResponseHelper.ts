export function successMessage(title: string) {
  return { success: true, message: title };
}

export function successData(data: any) {
  return { success: true, payload: data };
}

export function updateData(payload: any) {
  payload.status = "updated";
  return { success: true, payload };
}

export function errorMessage(title: string) {
  return { success: false, message: title };
}

export function errorData(data: any) {
  return { success: false, data };
}

export function serverError() {
  return { success: false, message: "Internal server error" };
}
