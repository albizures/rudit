import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокатать: PerfectVerb = {
  name: Word('прокатать', 6),
  singular1stPerson: Word('прокатаю', 6),
  singular2ndPerson: Word('прокатаешь', 6),
  singular3rdPerson: Word('прокатает', 6),
  plural1stPerson: Word('прокатаем', 6),
  plural2ndPerson: Word('прокатаете', 6),
  plural3rdPerson: Word('прокатают', 6),
  masculinePast: Word('прокатал', 6),
  femininePast: Word('прокатала', 6),
  neuterPast: Word('прокатало', 6),
  pluralPast: Word('прокатали', 6),
  imperativeInformal: Word('прокатай', 6),
  imperativeFormal: Word('прокатайте', 6),
  imperfect: [],
};

perfectVerbs.set(прокатать.name.text, прокатать);

export { прокатать };