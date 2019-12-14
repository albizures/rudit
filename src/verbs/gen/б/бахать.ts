import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бахать: PerfectVerb = {
  name: Word('бахать', 1),
  singular1stPerson: Word('бахаю', 1),
  singular2ndPerson: Word('бахаешь', 1),
  singular3rdPerson: Word('бахает', 1),
  plural1stPerson: Word('бахаем', 1),
  plural2ndPerson: Word('бахаете', 1),
  plural3rdPerson: Word('бахают', 1),
  masculinePast: Word('бахал', 1),
  femininePast: Word('бахала', 1),
  neuterPast: Word('бахало', 1),
  pluralPast: Word('бахали', 1),
  imperativeInformal: Word('бахай', 1),
  imperativeFormal: Word('бахайте', 1),
  imperfect: [],
};

perfectVerbs.set(бахать.name.text, бахать);

export { бахать };