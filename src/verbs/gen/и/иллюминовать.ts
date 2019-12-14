import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иллюминовать: PerfectVerb = {
  name: Word('иллюминовать', 9),
  singular1stPerson: Word('иллюминую', 7),
  singular2ndPerson: Word('иллюминуешь', 7),
  singular3rdPerson: Word('иллюминует', 7),
  plural1stPerson: Word('иллюминуем', 7),
  plural2ndPerson: Word('иллюминуете', 7),
  plural3rdPerson: Word('иллюминуют', 7),
  masculinePast: Word('иллюминовал', 9),
  femininePast: Word('иллюминовала', 9),
  neuterPast: Word('иллюминовало', 9),
  pluralPast: Word('иллюминовали', 9),
  imperativeInformal: Word('иллюминуй', 7),
  imperativeFormal: Word('иллюминуйте', 7),
  imperfect: [],
};

perfectVerbs.set(иллюминовать.name.text, иллюминовать);

export { иллюминовать };