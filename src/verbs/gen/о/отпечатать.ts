import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпечатать: PerfectVerb = {
  name: Word('отпечатать', 5),
  singular1stPerson: Word('отпечатаю', 5),
  singular2ndPerson: Word('отпечатаешь', 5),
  singular3rdPerson: Word('отпечатает', 5),
  plural1stPerson: Word('отпечатаем', 5),
  plural2ndPerson: Word('отпечатаете', 5),
  plural3rdPerson: Word('отпечатают', 5),
  masculinePast: Word('отпечатал', 5),
  femininePast: Word('отпечатала', 5),
  neuterPast: Word('отпечатало', 5),
  pluralPast: Word('отпечатали', 5),
  imperativeInformal: Word('отпечатай', 5),
  imperativeFormal: Word('отпечатайте', 5),
  imperfect: [],
};

perfectVerbs.set(отпечатать.name.text, отпечатать);

export { отпечатать };