import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнять: PerfectVerb = {
  name: Word('обнять', 3),
  singular1stPerson: Word('обниму', 5),
  singular2ndPerson: Word('обнимешь', 3),
  singular3rdPerson: Word('обнимет', 3),
  plural1stPerson: Word('обнимем', 3),
  plural2ndPerson: Word('обнимете', 3),
  plural3rdPerson: Word('обнимут', 3),
  masculinePast: Word('обнял,обня'л', 0),
  femininePast: Word('обняла', 5),
  neuterPast: Word('обняло,обня'ло', 0),
  pluralPast: Word('обняли,обня'ли', 0),
  imperativeInformal: Word('обними', 5),
  imperativeFormal: Word('обнимите', 5),
  imperfect: ['обнимать'],
};

perfectVerbs.set(обнять.name.text, обнять);

export { обнять };