import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спасовать: PerfectVerb = {
  name: Word('спасовать', 6),
  singular1stPerson: Word('спасую', 4),
  singular2ndPerson: Word('спасуешь', 4),
  singular3rdPerson: Word('спасует', 4),
  plural1stPerson: Word('спасуем', 4),
  plural2ndPerson: Word('спасуете', 4),
  plural3rdPerson: Word('спасуют', 4),
  masculinePast: Word('спасовал', 6),
  femininePast: Word('спасовала', 6),
  neuterPast: Word('спасовало', 6),
  pluralPast: Word('спасовали', 6),
  imperativeInformal: Word('спасуй', 4),
  imperativeFormal: Word('спасуйте', 4),
  imperfect: [],
};

perfectVerbs.set(спасовать.name.text, спасовать);

export { спасовать };