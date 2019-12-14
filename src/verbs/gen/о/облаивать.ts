import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облаивать: PerfectVerb = {
  name: Word('облаивать', 3),
  singular1stPerson: Word('облаиваю', 3),
  singular2ndPerson: Word('облаиваешь', 3),
  singular3rdPerson: Word('облаивает', 3),
  plural1stPerson: Word('облаиваем', 3),
  plural2ndPerson: Word('облаиваете', 3),
  plural3rdPerson: Word('облаивают', 3),
  masculinePast: Word('облаивал', 3),
  femininePast: Word('облаивала', 3),
  neuterPast: Word('облаивало', 3),
  pluralPast: Word('облаивали', 3),
  imperativeInformal: Word('облаивай', 3),
  imperativeFormal: Word('облаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(облаивать.name.text, облаивать);

export { облаивать };