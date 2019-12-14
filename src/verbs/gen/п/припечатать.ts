import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припечатать: PerfectVerb = {
  name: Word('припечатать', 6),
  singular1stPerson: Word('припечатаю', 6),
  singular2ndPerson: Word('припечатаешь', 6),
  singular3rdPerson: Word('припечатает', 6),
  plural1stPerson: Word('припечатаем', 6),
  plural2ndPerson: Word('припечатаете', 6),
  plural3rdPerson: Word('припечатают', 6),
  masculinePast: Word('припечатал', 6),
  femininePast: Word('припечатала', 6),
  neuterPast: Word('припечатало', 6),
  pluralPast: Word('припечатали', 6),
  imperativeInformal: Word('припечатай', 6),
  imperativeFormal: Word('припечатайте', 6),
  imperfect: [],
};

perfectVerbs.set(припечатать.name.text, припечатать);

export { припечатать };