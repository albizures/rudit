import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const диктовать: PerfectVerb = {
  name: Word('диктовать', 6),
  singular1stPerson: Word('диктую', 4),
  singular2ndPerson: Word('диктуешь', 4),
  singular3rdPerson: Word('диктует', 4),
  plural1stPerson: Word('диктуем', 4),
  plural2ndPerson: Word('диктуете', 4),
  plural3rdPerson: Word('диктуют', 4),
  masculinePast: Word('диктовал', 6),
  femininePast: Word('диктовала', 6),
  neuterPast: Word('диктовало', 6),
  pluralPast: Word('диктовали', 6),
  imperativeInformal: Word('диктуй', 4),
  imperativeFormal: Word('диктуйте', 4),
  imperfect: [],
};

perfectVerbs.set(диктовать.name.text, диктовать);

export { диктовать };