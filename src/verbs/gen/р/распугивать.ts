import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распугивать: PerfectVerb = {
  name: Word('распугивать', 4),
  singular1stPerson: Word('распугиваю', 4),
  singular2ndPerson: Word('распугиваешь', 4),
  singular3rdPerson: Word('распугивает', 4),
  plural1stPerson: Word('распугиваем', 4),
  plural2ndPerson: Word('распугиваете', 4),
  plural3rdPerson: Word('распугивают', 4),
  masculinePast: Word('распугивал', 4),
  femininePast: Word('распугивала', 4),
  neuterPast: Word('распугивало', 4),
  pluralPast: Word('распугивали', 4),
  imperativeInformal: Word('распугивай', 4),
  imperativeFormal: Word('распугивайте', 4),
  imperfect: [],
};

perfectVerbs.set(распугивать.name.text, распугивать);

export { распугивать };