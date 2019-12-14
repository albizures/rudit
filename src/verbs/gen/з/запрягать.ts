import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрягать: PerfectVerb = {
  name: Word('запрягать', 6),
  singular1stPerson: Word('запрягаю', 6),
  singular2ndPerson: Word('запрягаешь', 6),
  singular3rdPerson: Word('запрягает', 6),
  plural1stPerson: Word('запрягаем', 6),
  plural2ndPerson: Word('запрягаете', 6),
  plural3rdPerson: Word('запрягают', 6),
  masculinePast: Word('запрягал', 6),
  femininePast: Word('запрягала', 6),
  neuterPast: Word('запрягало', 6),
  pluralPast: Word('запрягали', 6),
  imperativeInformal: Word('запрягай', 6),
  imperativeFormal: Word('запрягайте', 6),
  imperfect: ['запрячь'],
};

perfectVerbs.set(запрягать.name.text, запрягать);

export { запрягать };