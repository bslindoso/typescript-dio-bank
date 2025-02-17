type CPF = string;

const isValidCPF = (cpf: CPF): boolean => {
  const cpfPattern = /^\d{11}$/; // Regex for 11 numerical digits

  return cpfPattern.test(cpf);
};

export { CPF, isValidCPF };
