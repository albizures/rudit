import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шатать: PerfectVerb = {
  name: Word('шатать', 3),
  singular1stPerson: Word('шатаю', 3),
  singular2ndPerson: Word('шатаешь', 3),
  singular3rdPerson: Word('шатает', 3),
  plural1stPerson: Word('шатаем', 3),
  plural2ndPerson: Word('шатаете', 3),
  plural3rdPerson: Word('шатают', 3),
  masculinePast: Word('шатал', 3),
  femininePast: Word('шатала', 3),
  neuterPast: Word('шатало', 3),
  pluralPast: Word('шатали', 3),
  imperativeInformal: Word('шатай', 3),
  imperativeFormal: Word('шатайте', 3),
  imperfect: [],
};

perfectVerbs.set(шатать.name.text, шатать);

export { шатать };