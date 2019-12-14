import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принять: PerfectVerb = {
  name: Word('принять', 4),
  singular1stPerson: Word('приму', 4),
  singular2ndPerson: Word('примешь', 2),
  singular3rdPerson: Word('примет', 2),
  plural1stPerson: Word('примем', 2),
  plural2ndPerson: Word('примете', 2),
  plural3rdPerson: Word('примут', 2),
  masculinePast: Word('принял', 2),
  femininePast: Word('приняла', 6),
  neuterPast: Word('приняло', 2),
  pluralPast: Word('приняли', 2),
  imperativeInformal: Word('прими', 4),
  imperativeFormal: Word('примите', 4),
  imperfect: ['принимать'],
};

perfectVerbs.set(принять.name.text, принять);

export { принять };