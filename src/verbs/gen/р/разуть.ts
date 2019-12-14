import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разуть: PerfectVerb = {
  name: Word('разуть', 3),
  singular1stPerson: Word('разую', 3),
  singular2ndPerson: Word('разуешь', 3),
  singular3rdPerson: Word('разует', 3),
  plural1stPerson: Word('разуем', 3),
  plural2ndPerson: Word('разуете', 3),
  plural3rdPerson: Word('разуют', 3),
  masculinePast: Word('разул', 3),
  femininePast: Word('разула', 3),
  neuterPast: Word('разуло', 3),
  pluralPast: Word('разули', 3),
  imperativeInformal: Word('разуй', 3),
  imperativeFormal: Word('разуйте', 3),
  imperfect: [],
};

perfectVerbs.set(разуть.name.text, разуть);

export { разуть };