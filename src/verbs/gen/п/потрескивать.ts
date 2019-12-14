import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрескивать: PerfectVerb = {
  name: Word('потрескивать', 4),
  singular1stPerson: Word('потрескиваю', 4),
  singular2ndPerson: Word('потрескиваешь', 4),
  singular3rdPerson: Word('потрескивает', 4),
  plural1stPerson: Word('потрескиваем', 4),
  plural2ndPerson: Word('потрескиваете', 4),
  plural3rdPerson: Word('потрескивают', 4),
  masculinePast: Word('потрескивал', 4),
  femininePast: Word('потрескивала', 4),
  neuterPast: Word('потрескивало', 4),
  pluralPast: Word('потрескивали', 4),
  imperativeInformal: Word('потрескивай', 4),
  imperativeFormal: Word('потрескивайте', 4),
  imperfect: [],
};

perfectVerbs.set(потрескивать.name.text, потрескивать);

export { потрескивать };