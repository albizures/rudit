import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поколебать: PerfectVerb = {
  name: Word('поколебать', 7),
  singular1stPerson: Word('поколеблю', 5),
  singular2ndPerson: Word('поколеблешь', 5),
  singular3rdPerson: Word('поколеблет', 5),
  plural1stPerson: Word('поколеблем', 5),
  plural2ndPerson: Word('поколеблете', 5),
  plural3rdPerson: Word('поколеблют', 5),
  masculinePast: Word('поколебал', 7),
  femininePast: Word('поколебала', 7),
  neuterPast: Word('поколебало', 7),
  pluralPast: Word('поколебали', 7),
  imperativeInformal: Word('поколебли', 5),
  imperativeFormal: Word('поколеблите', 5),
  imperfect: [],
};

perfectVerbs.set(поколебать.name.text, поколебать);

export { поколебать };