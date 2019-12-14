import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поднять: PerfectVerb = {
  name: Word('поднять', 4),
  singular1stPerson: Word('подниму', 6),
  singular2ndPerson: Word('поднимешь', 4),
  singular3rdPerson: Word('поднимет', 4),
  plural1stPerson: Word('поднимем', 4),
  plural2ndPerson: Word('поднимете', 4),
  plural3rdPerson: Word('поднимут', 4),
  masculinePast: Word('поднял,подня'л', 1),
  femininePast: Word('подняла', 6),
  neuterPast: Word('подняло,подня'ло', 1),
  pluralPast: Word('подняли,подня'ли', 1),
  imperativeInformal: Word('подними', 6),
  imperativeFormal: Word('поднимите', 6),
  imperfect: ['поднимать'],
};

perfectVerbs.set(поднять.name.text, поднять);

export { поднять };