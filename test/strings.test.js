const {
  stringMock: { test9, resp9 },
} = require("./mocks");
/* Gabaritos */
/*   const {
  reverseNames,
  converteType,
  personalPresentation,
  mathOperations,
  firstLastLetter,
  dogName,
  includeA,
  countLetters,
  encodeMessage,
} = require("../Desafios/Strings/Gabaritos/1-9");
telephoneFormat = require("../Desafios/Strings/Gabaritos/10");
*/

 const {
  reverseNames,
  converteType,
  personalPresentation,
  mathOperations,
  firstLastLetter,
  dogName,
  includeA,
  countLetters,
  encodeMessage,
  telephoneFormat,
} = require("../Desafios/Strings");

describe("Desafios de Strings.", () => {
  describe("01 - Testando a Função reverseNames .", () => {
    it("Ao passar o argumento 'Caio Lewis', deve retornar: 'Lewis Caio'", () => {
      expect(reverseNames("Caio Lewis")).toBe("Lewis Caio");
    });
  });

  describe("02 - Testando a Função converteType.", () => {
    it("Ao passar o argumento '1', deve retornar: 1", () => {
      expect(converteType("1")).toBe(1);
    });
  });

  describe("03 - Testando a Função personalPresentation.", () => {
    it(`Ao passar o argumento 'Márcio Daniel', deve retornar:
         'Meu nome é Márcio Daniel e tenho 35 anos de vida.'`, () => {
      expect(personalPresentation("Márcio", "Daniel", 35)).toBe(
        "Meu nome é Márcio Daniel e tenho 35 anos de vida."
      );
    });
  });

  describe("04 - Testando a Função mathOperations.", () => {
    it(`Ao passar os argumento 1 e 1, deve retornar:
         '1 + 1 = 2. 1 - 1 = 0. 1 x 1 = 1. 1 / 1 = 1.'`, () => {
      expect(mathOperations(1, 1)).toBe(
        "1 + 1 = 2. 1 - 1 = 0. 1 x 1 = 1. 1 / 1 = 1."
      );
    });
  });

  describe("05 - Testando a Função firstLastLetter.", () => {
    it(`Ao passar o argumento 'Junior', deve retornar:
         'A primeira letra é: J e a última letra é: r.'`, () => {
      expect(firstLastLetter("Junior")).toBe(
        "A primeira letra é: J e a última letra é: r."
      );
    });
  });

  describe("06 - Testando a Função dogName.", () => {
    it(`Ao passar os argumento 'Chips' e 'Brigadeiro', deve retornar:
         'O cachorrinho de Joana vai se chamar: Chiiro'`, () => {
      expect(dogName("Chips", "Brigadeiro")).toBe(
        "O cachorrinho de Joana vai se chamar: Chiiro"
      );
    });
  });

  describe("07 - Testando a Função includeA.", () => {
    it(`Ao passar o argumento 'Coragem', deve retornar:
         'A palavra Coragem possui a letra 'a', porém não é a primeira nem a última letra.'`, () => {
      expect(includeA("Coragem")).toBe(
        "A palavra Coragem possui a letra 'a', porém não é a primeira nem a última letra."
      );
    });
    it(`Ao passar o argumento 'ana', deve retornar:
         ''`, () => {
      expect(includeA("ana")).toBe(
        "A palavra ana possui a letra 'a' apenas no começo e no fim da palavra."
      );
    });
    it(`Ao passar o argumento 'Amém', deve retornar:
         'A palavra Amém possui a letra 'a' apenas como primeira letra.'`, () => {
      expect(includeA("Amém")).toBe(
        "A palavra Amém possui a letra 'a' apenas como primeira letra."
      );
    });
    it(`Ao passar o argumento 'Lua', deve retornar:
         'A palavra Lua possui a letra 'a' apenas como última letra.'`, () => {
      expect(includeA("Lua")).toBe(
        "A palavra Lua possui a letra 'a' apenas como última letra."
      );
    });
    it(`Ao passar o argumento 'Esquivo', deve retornar:
         'A palavra esquivo não contém a letra 'a'.'`, () => {
      expect(includeA("Esquivo")).toBe(
        "A palavra Esquivo não contém a letra 'a'."
      );
    });
  });

  describe("08 - Testando a Função countLetters.", () => {
    it("Ao passar o argumento 'Abacate', deve retornar: 3", () => {
      expect(countLetters("Abacate", "a")).toBe(3);
    });
    it("Ao passar o argumento 'Ando de vagar porque já tive pressa', deve retornar: 5", () => {
      expect(countLetters("Ando de vagar porque já tive pressa", "a")).toBe(5);
    });
    it("Ao passar o argumento 'àáäâã', deve retornar: 5", () => {
      expect(countLetters("àáäâã", "a")).toBe(5);
    });
    it("Ao passar o argumento 'èéëê', deve retornar: 4", () => {
      expect(countLetters("èéëê", "e")).toBe(4);
    });
    it("Ao passar o argumento 'ìíïî', deve retornar: 4", () => {
      expect(countLetters("ìíïî", "i")).toBe(4);
    });
    it("Ao passar o argumento 'òóöô', deve retornar: 4", () => {
      expect(countLetters("òóöô", "o")).toBe(4);
    });
    it("Ao passar o argumento 'ùúüû', deve retornar: 4", () => {
      expect(countLetters("ùúüû", "u")).toBe(4);
    });
  });

  describe("09 - Testando a Função encodeMessage.", () => {
    it("Ao passar o argumento 'aeiou', deve retornar: '5b9p1'", () => {
      expect(encodeMessage("aeiou")).toBe("5b9p1");
    });
    it("Verifica o retorno ao passar o trecho de uma música.", () => {
      expect(encodeMessage(test9)).toBe(resp9);
    });
  });

  describe("10 - Testando a Função telephoneFormat.", () => {
    it("Ao passar o argumento '11 97878-7878', deve retornar: '(11) 9 7878-7878'", () => {
      expect(telephoneFormat("11 97878-7878")).toBe("(11) 9 7878-7878");
    });
    it("Ao passar o argumento '(11)78787878', deve retornar: '(11) 7878-7878'", () => {
      expect(telephoneFormat("(11)7878-7878")).toBe("(11) 7878-7878");
    });
    it("Ao passar o argumento 1178787878, deve retornar: '(11) 7878-7878'", () => {
      expect(telephoneFormat(1178787878)).toBe("(11) 7878-7878");
    });
    it("Ao passar um argumento inválido o mesmo deve ser retornado", () => {
      expect(telephoneFormat("234")).toBe("234");
    });
  });
});
