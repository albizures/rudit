import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удостаивать: PerfectVerb = {
  name: Word('удостаивать', 5),
  singular1stPerson: Word('удостаиваю', 5),
  singular2ndPerson: Word('удостаиваешь', 5),
  singular3rdPerson: Word('удостаивает', 5),
  plural1stPerson: Word('удостаиваем', 5),
  plural2ndPerson: Word('удостаиваете', 5),
  plural3rdPerson: Word('удостаивают', 5),
  masculinePast: Word('удостаивал', 5),
  femininePast: Word('удостаивала', 5),
  neuterPast: Word('удостаивало', 5),
  pluralPast: Word('удостаивали', 5),
  imperativeInformal: Word('удостаивай', 5),
  imperativeFormal: Word('удостаивайте', 5),
  imperfect: [],
};

perfectVerbs.set(удостаивать.name.text, удостаивать);

export { удостаивать };