import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропечатать: PerfectVerb = {
  name: Word('пропечатать', 6),
  singular1stPerson: Word('пропечатаю', 6),
  singular2ndPerson: Word('пропечатаешь', 6),
  singular3rdPerson: Word('пропечатает', 6),
  plural1stPerson: Word('пропечатаем', 6),
  plural2ndPerson: Word('пропечатаете', 6),
  plural3rdPerson: Word('пропечатают', 6),
  masculinePast: Word('пропечатал', 6),
  femininePast: Word('пропечатала', 6),
  neuterPast: Word('пропечатало', 6),
  pluralPast: Word('пропечатали', 6),
  imperativeInformal: Word('пропечатай', 6),
  imperativeFormal: Word('пропечатайте', 6),
  imperfect: [],
};

perfectVerbs.set(пропечатать.name.text, пропечатать);

export { пропечатать };