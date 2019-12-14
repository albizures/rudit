import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запускать: PerfectVerb = {
  name: Word('запускать', 6),
  singular1stPerson: Word('запускаю', 6),
  singular2ndPerson: Word('запускаешь', 6),
  singular3rdPerson: Word('запускает', 6),
  plural1stPerson: Word('запускаем', 6),
  plural2ndPerson: Word('запускаете', 6),
  plural3rdPerson: Word('запускают', 6),
  masculinePast: Word('запускал', 6),
  femininePast: Word('запускала', 6),
  neuterPast: Word('запускало', 6),
  pluralPast: Word('запускали', 6),
  imperativeInformal: Word('запускай', 6),
  imperativeFormal: Word('запускайте', 6),
  imperfect: [],
};

perfectVerbs.set(запускать.name.text, запускать);

export { запускать };