import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докатать: PerfectVerb = {
  name: Word('докатать', 5),
  singular1stPerson: Word('докатаю', 5),
  singular2ndPerson: Word('докатаешь', 5),
  singular3rdPerson: Word('докатает', 5),
  plural1stPerson: Word('докатаем', 5),
  plural2ndPerson: Word('докатаете', 5),
  plural3rdPerson: Word('докатают', 5),
  masculinePast: Word('докатал', 5),
  femininePast: Word('докатала', 5),
  neuterPast: Word('докатало', 5),
  pluralPast: Word('докатали', 5),
  imperativeInformal: Word('докатай', 5),
  imperativeFormal: Word('докатайте', 5),
  imperfect: [],
};

perfectVerbs.set(докатать.name.text, докатать);

export { докатать };