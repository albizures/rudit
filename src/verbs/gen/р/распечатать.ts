import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распечатать: PerfectVerb = {
  name: Word('распечатать', 6),
  singular1stPerson: Word('распечатаю', 6),
  singular2ndPerson: Word('распечатаешь', 6),
  singular3rdPerson: Word('распечатает', 6),
  plural1stPerson: Word('распечатаем', 6),
  plural2ndPerson: Word('распечатаете', 6),
  plural3rdPerson: Word('распечатают', 6),
  masculinePast: Word('распечатал', 6),
  femininePast: Word('распечатала', 6),
  neuterPast: Word('распечатало', 6),
  pluralPast: Word('распечатали', 6),
  imperativeInformal: Word('распечатай', 6),
  imperativeFormal: Word('распечатайте', 6),
  imperfect: ['распечатывать'],
};

perfectVerbs.set(распечатать.name.text, распечатать);

export { распечатать };