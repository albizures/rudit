import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстаивать: PerfectVerb = {
  name: Word('выстаивать', 4),
  singular1stPerson: Word('выстаиваю', 4),
  singular2ndPerson: Word('выстаиваешь', 4),
  singular3rdPerson: Word('выстаивает', 4),
  plural1stPerson: Word('выстаиваем', 4),
  plural2ndPerson: Word('выстаиваете', 4),
  plural3rdPerson: Word('выстаивают', 4),
  masculinePast: Word('выстаивал', 4),
  femininePast: Word('выстаивала', 4),
  neuterPast: Word('выстаивало', 4),
  pluralPast: Word('выстаивали', 4),
  imperativeInformal: Word('выстаивай', 4),
  imperativeFormal: Word('выстаивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выстаивать.name.text, выстаивать);

export { выстаивать };