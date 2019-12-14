import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испускать: PerfectVerb = {
  name: Word('испускать', 6),
  singular1stPerson: Word('испускаю', 6),
  singular2ndPerson: Word('испускаешь', 6),
  singular3rdPerson: Word('испускает', 6),
  plural1stPerson: Word('испускаем', 6),
  plural2ndPerson: Word('испускаете', 6),
  plural3rdPerson: Word('испускают', 6),
  masculinePast: Word('испускал', 6),
  femininePast: Word('испускала', 6),
  neuterPast: Word('испускало', 6),
  pluralPast: Word('испускали', 6),
  imperativeInformal: Word('испускай', 6),
  imperativeFormal: Word('испускайте', 6),
  imperfect: [],
};

perfectVerbs.set(испускать.name.text, испускать);

export { испускать };