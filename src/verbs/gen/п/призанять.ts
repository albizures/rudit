import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const призанять: PerfectVerb = {
  name: Word('призанять', 6),
  singular1stPerson: Word('призайму', 7),
  singular2ndPerson: Word('призаймёшь', 7),
  singular3rdPerson: Word('призаймёт', 7),
  plural1stPerson: Word('призаймём', 7),
  plural2ndPerson: Word('призаймёте', 7),
  plural3rdPerson: Word('призаймут', 7),
  masculinePast: Word('призанял', 6),
  femininePast: Word('призаняла', 8),
  neuterPast: Word('призаняло', 6),
  pluralPast: Word('призаняли', 6),
  imperativeInformal: Word('призайми', 7),
  imperativeFormal: Word('призаймите', 7),
  imperfect: [],
};

perfectVerbs.set(призанять.name.text, призанять);

export { призанять };