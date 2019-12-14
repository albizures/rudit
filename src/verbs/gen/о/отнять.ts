import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отнять: PerfectVerb = {
  name: Word('отнять', 3),
  singular1stPerson: Word('отниму', 5),
  singular2ndPerson: Word('отнимешь', 3),
  singular3rdPerson: Word('отнимет', 3),
  plural1stPerson: Word('отнимем', 3),
  plural2ndPerson: Word('отнимете', 3),
  plural3rdPerson: Word('отнимут', 3),
  masculinePast: Word('отнял,отня'л', 0),
  femininePast: Word('отняла', 5),
  neuterPast: Word('отняло,отня'ло', 0),
  pluralPast: Word('отняли,отня'ли', 0),
  imperativeInformal: Word('отними', 5),
  imperativeFormal: Word('отнимите', 5),
  imperfect: ['отнимать','отымать'],
};

perfectVerbs.set(отнять.name.text, отнять);

export { отнять };