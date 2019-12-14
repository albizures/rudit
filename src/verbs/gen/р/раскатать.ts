import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскатать: PerfectVerb = {
  name: Word('раскатать', 6),
  singular1stPerson: Word('раскатаю', 6),
  singular2ndPerson: Word('раскатаешь', 6),
  singular3rdPerson: Word('раскатает', 6),
  plural1stPerson: Word('раскатаем', 6),
  plural2ndPerson: Word('раскатаете', 6),
  plural3rdPerson: Word('раскатают', 6),
  masculinePast: Word('раскатал', 6),
  femininePast: Word('раскатала', 6),
  neuterPast: Word('раскатало', 6),
  pluralPast: Word('раскатали', 6),
  imperativeInformal: Word('раскатай', 6),
  imperativeFormal: Word('раскатайте', 6),
  imperfect: ['раскатывать'],
};

perfectVerbs.set(раскатать.name.text, раскатать);

export { раскатать };