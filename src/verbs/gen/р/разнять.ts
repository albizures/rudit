import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнять: PerfectVerb = {
  name: Word('разнять', 4),
  singular1stPerson: Word('разниму', 6),
  singular2ndPerson: Word('разнимешь', 4),
  singular3rdPerson: Word('разнимет', 4),
  plural1stPerson: Word('разнимем', 4),
  plural2ndPerson: Word('разнимете', 4),
  plural3rdPerson: Word('разнимут', 4),
  masculinePast: Word('разнял', 4),
  femininePast: Word('разняла', 6),
  neuterPast: Word('разняло', 4),
  pluralPast: Word('разняли', 4),
  imperativeInformal: Word('разними', 6),
  imperativeFormal: Word('разнимите', 6),
  imperfect: [],
};

perfectVerbs.set(разнять.name.text, разнять);

export { разнять };