import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспринять: PerfectVerb = {
  name: Word('воспринять', 7),
  singular1stPerson: Word('восприму', 7),
  singular2ndPerson: Word('воспримешь', 5),
  singular3rdPerson: Word('воспримет', 5),
  plural1stPerson: Word('воспримем', 5),
  plural2ndPerson: Word('воспримете', 5),
  plural3rdPerson: Word('воспримут', 5),
  masculinePast: Word('воспринял', 5),
  femininePast: Word('восприняла', 9),
  neuterPast: Word('восприняло', 5),
  pluralPast: Word('восприняли', 5),
  imperativeInformal: Word('восприми', 7),
  imperativeFormal: Word('воспримите', 7),
  imperfect: ['воспринимать'],
};

perfectVerbs.set(воспринять.name.text, воспринять);

export { воспринять };