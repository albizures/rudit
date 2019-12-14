import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укатать: PerfectVerb = {
  name: Word('укатать', 4),
  singular1stPerson: Word('укатаю', 4),
  singular2ndPerson: Word('укатаешь', 4),
  singular3rdPerson: Word('укатает', 4),
  plural1stPerson: Word('укатаем', 4),
  plural2ndPerson: Word('укатаете', 4),
  plural3rdPerson: Word('укатают', 4),
  masculinePast: Word('укатал', 4),
  femininePast: Word('укатала', 4),
  neuterPast: Word('укатало', 4),
  pluralPast: Word('укатали', 4),
  imperativeInformal: Word('укатай', 4),
  imperativeFormal: Word('укатайте', 4),
  imperfect: [],
};

perfectVerbs.set(укатать.name.text, укатать);

export { укатать };