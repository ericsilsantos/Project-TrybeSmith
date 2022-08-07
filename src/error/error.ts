class InvalidLoginError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidLoginError';
  }
}

// function InvalidLoginError(message: string): Error {
//   const error = new Error(message);
//   error.name = 'InvalidLoginError';
//   throw error;
// }

export default InvalidLoginError;