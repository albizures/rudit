import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просушивать: PerfectVerb = {
  name: Word('просушивать', 4),
  singular1stPerson: Word('просушиваю', 4),
  singular2ndPerson: Word('просушиваешь', 4),
  singular3rdPerson: Word('просушивает', 4),
  plural1stPerson: Word('просушиваем', 4),
  plural2ndPerson: Word('просушиваете', 4),
  plural3rdPerson: Word('просушивают', 4),
  masculinePast: Word('просушивал', 4),
  femininePast: Word('просушивала', 4),
  neuterPast: Word('просушивало', 4),
  pluralPast: Word('просушивали', 4),
  imperativeInformal: Word('просушивай', 4),
  imperativeFormal: Word('просушивайте', 4),
  imperfect: [],
};

perfectVerbs.set(просушивать.name.text, просушивать);

export { просушивать };