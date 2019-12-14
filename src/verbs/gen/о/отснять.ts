import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отснять: PerfectVerb = {
  name: Word('отснять', 4),
  singular1stPerson: Word('отсниму', 6),
  singular2ndPerson: Word('отснимешь', 4),
  singular3rdPerson: Word('отснимет', 4),
  plural1stPerson: Word('отснимем', 4),
  plural2ndPerson: Word('отснимете', 4),
  plural3rdPerson: Word('отснимут', 4),
  masculinePast: Word('отснял', 4),
  femininePast: Word('отсняла', 6),
  neuterPast: Word('отсняло', 4),
  pluralPast: Word('отсняли', 4),
  imperativeInformal: Word('отсними', 6),
  imperativeFormal: Word('отснимите', 6),
  imperfect: [],
};

perfectVerbs.set(отснять.name.text, отснять);

export { отснять };