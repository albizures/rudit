import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припугивать: PerfectVerb = {
  name: Word('припугивать', 4),
  singular1stPerson: Word('припугиваю', 4),
  singular2ndPerson: Word('припугиваешь', 4),
  singular3rdPerson: Word('припугивает', 4),
  plural1stPerson: Word('припугиваем', 4),
  plural2ndPerson: Word('припугиваете', 4),
  plural3rdPerson: Word('припугивают', 4),
  masculinePast: Word('припугивал', 4),
  femininePast: Word('припугивала', 4),
  neuterPast: Word('припугивало', 4),
  pluralPast: Word('припугивали', 4),
  imperativeInformal: Word('припугивай', 4),
  imperativeFormal: Word('припугивайте', 4),
  imperfect: [],
};

perfectVerbs.set(припугивать.name.text, припугивать);

export { припугивать };