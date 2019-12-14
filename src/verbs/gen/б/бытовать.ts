import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бытовать: PerfectVerb = {
  name: Word('бытовать', 5),
  singular1stPerson: Word('бытую', 3),
  singular2ndPerson: Word('бытуешь', 3),
  singular3rdPerson: Word('бытует', 3),
  plural1stPerson: Word('бытуем', 3),
  plural2ndPerson: Word('бытуете', 3),
  plural3rdPerson: Word('бытуют', 3),
  masculinePast: Word('бытовал', 5),
  femininePast: Word('бытовала', 5),
  neuterPast: Word('бытовало', 5),
  pluralPast: Word('бытовали', 5),
  imperativeInformal: Word('бытуй', 3),
  imperativeFormal: Word('бытуйте', 3),
  imperfect: [],
};

perfectVerbs.set(бытовать.name.text, бытовать);

export { бытовать };