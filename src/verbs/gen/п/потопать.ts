import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потопать: PerfectVerb = {
  name: Word('потопать', 5),
  singular1stPerson: Word('потопаю', 5),
  singular2ndPerson: Word('потопаешь', 5),
  singular3rdPerson: Word('потопает', 5),
  plural1stPerson: Word('потопаем', 5),
  plural2ndPerson: Word('потопаете', 5),
  plural3rdPerson: Word('потопают', 5),
  masculinePast: Word('потопал', 5),
  femininePast: Word('потопала', 5),
  neuterPast: Word('потопало', 5),
  pluralPast: Word('потопали', 5),
  imperativeInformal: Word('потопай', 5),
  imperativeFormal: Word('потопайте', 5),
  imperfect: [],
};

perfectVerbs.set(потопать.name.text, потопать);

export { потопать };