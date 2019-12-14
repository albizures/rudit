import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накатать: PerfectVerb = {
  name: Word('накатать', 5),
  singular1stPerson: Word('накатаю', 5),
  singular2ndPerson: Word('накатаешь', 5),
  singular3rdPerson: Word('накатает', 5),
  plural1stPerson: Word('накатаем', 5),
  plural2ndPerson: Word('накатаете', 5),
  plural3rdPerson: Word('накатают', 5),
  masculinePast: Word('накатал', 5),
  femininePast: Word('накатала', 5),
  neuterPast: Word('накатало', 5),
  pluralPast: Word('накатали', 5),
  imperativeInformal: Word('накатай', 5),
  imperativeFormal: Word('накатайте', 5),
  imperfect: [],
};

perfectVerbs.set(накатать.name.text, накатать);

export { накатать };