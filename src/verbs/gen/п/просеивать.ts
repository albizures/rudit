import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просеивать: PerfectVerb = {
  name: Word('просеивать', 4),
  singular1stPerson: Word('просеиваю', 4),
  singular2ndPerson: Word('просеиваешь', 4),
  singular3rdPerson: Word('просеивает', 4),
  plural1stPerson: Word('просеиваем', 4),
  plural2ndPerson: Word('просеиваете', 4),
  plural3rdPerson: Word('просеивают', 4),
  masculinePast: Word('просеивал', 4),
  femininePast: Word('просеивала', 4),
  neuterPast: Word('просеивало', 4),
  pluralPast: Word('просеивали', 4),
  imperativeInformal: Word('просеивай', 4),
  imperativeFormal: Word('просеивайте', 4),
  imperfect: [],
};

perfectVerbs.set(просеивать.name.text, просеивать);

export { просеивать };