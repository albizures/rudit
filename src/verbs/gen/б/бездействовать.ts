import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бездействовать: PerfectVerb = {
  name: Word('бездействовать', 4),
  singular1stPerson: Word('бездействую', 4),
  singular2ndPerson: Word('бездействуешь', 4),
  singular3rdPerson: Word('бездействует', 4),
  plural1stPerson: Word('бездействуем', 4),
  plural2ndPerson: Word('бездействуете', 4),
  plural3rdPerson: Word('бездействуют', 4),
  masculinePast: Word('бездействовал', 4),
  femininePast: Word('бездействовала', 4),
  neuterPast: Word('бездействовало', 4),
  pluralPast: Word('бездействовали', 4),
  imperativeInformal: Word('бездействуй', 4),
  imperativeFormal: Word('бездействуйте', 4),
  imperfect: [],
};

perfectVerbs.set(бездействовать.name.text, бездействовать);

export { бездействовать };