import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выведать: PerfectVerb = {
  name: Word('выведать', 1),
  singular1stPerson: Word('выведаю', 1),
  singular2ndPerson: Word('выведаешь', 1),
  singular3rdPerson: Word('выведает', 1),
  plural1stPerson: Word('выведаем', 1),
  plural2ndPerson: Word('выведаете', 1),
  plural3rdPerson: Word('выведают', 1),
  masculinePast: Word('выведал', 1),
  femininePast: Word('выведала', 1),
  neuterPast: Word('выведало', 1),
  pluralPast: Word('выведали', 1),
  imperativeInformal: Word('выведай', 1),
  imperativeFormal: Word('выведайте', 1),
  imperfect: [],
};

perfectVerbs.set(выведать.name.text, выведать);

export { выведать };