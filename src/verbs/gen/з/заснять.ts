import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заснять: PerfectVerb = {
  name: Word('заснять', 4),
  singular1stPerson: Word('засниму', 6),
  singular2ndPerson: Word('заснимешь', 4),
  singular3rdPerson: Word('заснимет', 4),
  plural1stPerson: Word('заснимем', 4),
  plural2ndPerson: Word('заснимете', 4),
  plural3rdPerson: Word('заснимут', 4),
  masculinePast: Word('заснял', 4),
  femininePast: Word('засняла', 6),
  neuterPast: Word('засняло', 4),
  pluralPast: Word('засняли', 4),
  imperativeInformal: Word('засними', 6),
  imperativeFormal: Word('заснимите', 6),
  imperfect: [],
};

perfectVerbs.set(заснять.name.text, заснять);

export { заснять };