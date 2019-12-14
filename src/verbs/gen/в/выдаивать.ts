import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдаивать: PerfectVerb = {
  name: Word('выдаивать', 3),
  singular1stPerson: Word('выдаиваю', 3),
  singular2ndPerson: Word('выдаиваешь', 3),
  singular3rdPerson: Word('выдаивает', 3),
  plural1stPerson: Word('выдаиваем', 3),
  plural2ndPerson: Word('выдаиваете', 3),
  plural3rdPerson: Word('выдаивают', 3),
  masculinePast: Word('выдаивал', 3),
  femininePast: Word('выдаивала', 3),
  neuterPast: Word('выдаивало', 3),
  pluralPast: Word('выдаивали', 3),
  imperativeInformal: Word('выдаивай', 3),
  imperativeFormal: Word('выдаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(выдаивать.name.text, выдаивать);

export { выдаивать };