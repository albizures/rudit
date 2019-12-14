import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бинтовать: PerfectVerb = {
  name: Word('бинтовать', 6),
  singular1stPerson: Word('бинтую', 4),
  singular2ndPerson: Word('бинтуешь', 4),
  singular3rdPerson: Word('бинтует', 4),
  plural1stPerson: Word('бинтуем', 4),
  plural2ndPerson: Word('бинтуете', 4),
  plural3rdPerson: Word('бинтуют', 4),
  masculinePast: Word('бинтовал', 6),
  femininePast: Word('бинтовала', 6),
  neuterPast: Word('бинтовало', 6),
  pluralPast: Word('бинтовали', 6),
  imperativeInformal: Word('бинтуй', 4),
  imperativeFormal: Word('бинтуйте', 4),
  imperfect: [],
};

perfectVerbs.set(бинтовать.name.text, бинтовать);

export { бинтовать };