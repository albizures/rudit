import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечёркивать: PerfectVerb = {
  name: Word('перечёркивать', 10),
  singular1stPerson: Word('перечёркиваю', 10),
  singular2ndPerson: Word('перечёркиваешь', 10),
  singular3rdPerson: Word('перечёркивает', 10),
  plural1stPerson: Word('перечёркиваем', 10),
  plural2ndPerson: Word('перечёркиваете', 10),
  plural3rdPerson: Word('перечёркивают', 10),
  masculinePast: Word('перечёркивал', 10),
  femininePast: Word('перечёркивала', 10),
  neuterPast: Word('перечёркивало', 10),
  pluralPast: Word('перечёркивали', 10),
  imperativeInformal: Word('перечёркивай', 10),
  imperativeFormal: Word('перечёркивайте', 10),
  imperfect: [],
};

perfectVerbs.set(перечёркивать.name.text, перечёркивать);

export { перечёркивать };