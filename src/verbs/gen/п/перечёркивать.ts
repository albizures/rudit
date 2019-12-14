import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечёркивать: PerfectVerb = {
  name: Word('перечёркивать', 5),
  singular1stPerson: Word('перечёркиваю', 5),
  singular2ndPerson: Word('перечёркиваешь', 5),
  singular3rdPerson: Word('перечёркивает', 5),
  plural1stPerson: Word('перечёркиваем', 5),
  plural2ndPerson: Word('перечёркиваете', 5),
  plural3rdPerson: Word('перечёркивают', 5),
  masculinePast: Word('перечёркивал', 5),
  femininePast: Word('перечёркивала', 5),
  neuterPast: Word('перечёркивало', 5),
  pluralPast: Word('перечёркивали', 5),
  imperativeInformal: Word('перечёркивай', 5),
  imperativeFormal: Word('перечёркивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перечёркивать.name.text, перечёркивать);

export { перечёркивать };