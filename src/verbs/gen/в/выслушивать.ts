import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выслушивать: PerfectVerb = {
  name: Word('выслушивать', 4),
  singular1stPerson: Word('выслушиваю', 4),
  singular2ndPerson: Word('выслушиваешь', 4),
  singular3rdPerson: Word('выслушивает', 4),
  plural1stPerson: Word('выслушиваем', 4),
  plural2ndPerson: Word('выслушиваете', 4),
  plural3rdPerson: Word('выслушивают', 4),
  masculinePast: Word('выслушивал', 4),
  femininePast: Word('выслушивала', 4),
  neuterPast: Word('выслушивало', 4),
  pluralPast: Word('выслушивали', 4),
  imperativeInformal: Word('выслушивай', 4),
  imperativeFormal: Word('выслушивайте', 4),
  imperfect: ['выслушать'],
};

perfectVerbs.set(выслушивать.name.text, выслушивать);

export { выслушивать };