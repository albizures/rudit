import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напаивать: PerfectVerb = {
  name: Word('напаивать', 3),
  singular1stPerson: Word('напаиваю', 3),
  singular2ndPerson: Word('напаиваешь', 3),
  singular3rdPerson: Word('напаивает', 3),
  plural1stPerson: Word('напаиваем', 3),
  plural2ndPerson: Word('напаиваете', 3),
  plural3rdPerson: Word('напаивают', 3),
  masculinePast: Word('напаивал', 3),
  femininePast: Word('напаивала', 3),
  neuterPast: Word('напаивало', 3),
  pluralPast: Word('напаивали', 3),
  imperativeInformal: Word('напаивай', 3),
  imperativeFormal: Word('напаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(напаивать.name.text, напаивать);

export { напаивать };