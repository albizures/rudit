import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провеивать: PerfectVerb = {
  name: Word('провеивать', 4),
  singular1stPerson: Word('провеиваю', 4),
  singular2ndPerson: Word('провеиваешь', 4),
  singular3rdPerson: Word('провеивает', 4),
  plural1stPerson: Word('провеиваем', 4),
  plural2ndPerson: Word('провеиваете', 4),
  plural3rdPerson: Word('провеивают', 4),
  masculinePast: Word('провеивал', 4),
  femininePast: Word('провеивала', 4),
  neuterPast: Word('провеивало', 4),
  pluralPast: Word('провеивали', 4),
  imperativeInformal: Word('провеивай', 4),
  imperativeFormal: Word('провеивайте', 4),
  imperfect: [],
};

perfectVerbs.set(провеивать.name.text, провеивать);

export { провеивать };