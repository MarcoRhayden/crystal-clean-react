import { LocalSaveAccessToken } from './local-save-access-token';
import { SetStorageMock } from '@/data/test/mock-storage';
import { faker } from '@faker-js/faker';

type SutTypes = {
  sut: LocalSaveAccessToken;
  setStorageMock: SetStorageMock;
};

const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock();
  const sut = new LocalSaveAccessToken(setStorageMock);
  return {
    sut,
    setStorageMock
  };
};

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const { sut, setStorageMock } = makeSut();
    const accessToken = faker.random.alphaNumeric();
    const key = faker.random.alphaNumeric();
    sut.save(key, accessToken);
    expect(setStorageMock.key).toBe(key);
    expect(setStorageMock.value).toBe(accessToken);
  });
});
