import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снять: PerfectVerb = {
  name: Word('снять', 2),
  singular1stPerson: Word('сниму', 4),
  singular2ndPerson: Word('снимешь', 2),
  singular3rdPerson: Word('снимет', 2),
  plural1stPerson: Word('снимем', 2),
  plural2ndPerson: Word('снимете', 2),
  plural3rdPerson: Word('снимут', 2),
  masculinePast: Word('снял', 2),
  femininePast: Word('сняла', 4),
  neuterPast: Word('сняло,сняло'', 2),
  pluralPast: Word('сняли', 2),
  imperativeInformal: Word('сними', 4),
  imperativeFormal: Word('снимите', 4),
  imperfect: ['снимать'],
};

perfectVerbs.set(снять.name.text, снять);

export { снять };