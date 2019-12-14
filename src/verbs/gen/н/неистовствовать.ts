import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const неистовствовать: PerfectVerb = {
  name: Word('неистовствовать', 2),
  singular1stPerson: Word('неистовствую', 2),
  singular2ndPerson: Word('неистовствуешь', 2),
  singular3rdPerson: Word('неистовствует', 2),
  plural1stPerson: Word('неистовствуем', 2),
  plural2ndPerson: Word('неистовствуете', 2),
  plural3rdPerson: Word('неистовствуют', 2),
  masculinePast: Word('неистовствовал', 2),
  femininePast: Word('неистовствовала', 2),
  neuterPast: Word('неистовствовало', 2),
  pluralPast: Word('неистовствовали', 2),
  imperativeInformal: Word('неистовствуй', 2),
  imperativeFormal: Word('неистовствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(неистовствовать.name.text, неистовствовать);

export { неистовствовать };