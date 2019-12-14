import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исследовать: PerfectVerb = {
  name: Word('исследовать', 4),
  singular1stPerson: Word('исследую', 4),
  singular2ndPerson: Word('исследуешь', 4),
  singular3rdPerson: Word('исследует', 4),
  plural1stPerson: Word('исследуем', 4),
  plural2ndPerson: Word('исследуете', 4),
  plural3rdPerson: Word('исследуют', 4),
  masculinePast: Word('исследовал', 4),
  femininePast: Word('исследовала', 4),
  neuterPast: Word('исследовало', 4),
  pluralPast: Word('исследовали', 4),
  imperativeInformal: Word('исследуй', 4),
  imperativeFormal: Word('исследуйте', 4),
  imperfect: [],
};

perfectVerbs.set(исследовать.name.text, исследовать);

export { исследовать };