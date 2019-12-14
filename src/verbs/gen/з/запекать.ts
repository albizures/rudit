import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запекать: PerfectVerb = {
  name: Word('запекать', 5),
  singular1stPerson: Word('запекаю', 5),
  singular2ndPerson: Word('запекаешь', 5),
  singular3rdPerson: Word('запекает', 5),
  plural1stPerson: Word('запекаем', 5),
  plural2ndPerson: Word('запекаете', 5),
  plural3rdPerson: Word('запекают', 5),
  masculinePast: Word('запекал', 5),
  femininePast: Word('запекала', 5),
  neuterPast: Word('запекало', 5),
  pluralPast: Word('запекали', 5),
  imperativeInformal: Word('запекай', 5),
  imperativeFormal: Word('запекайте', 5),
  imperfect: [],
};

perfectVerbs.set(запекать.name.text, запекать);

export { запекать };