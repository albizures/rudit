import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытереть: PerfectVerb = {
  name: Word('вытереть', 1),
  singular1stPerson: Word('вытру', 1),
  singular2ndPerson: Word('вытрешь', 1),
  singular3rdPerson: Word('вытрет', 1),
  plural1stPerson: Word('вытрем', 1),
  plural2ndPerson: Word('вытрете', 1),
  plural3rdPerson: Word('вытрут', 1),
  masculinePast: Word('вытер', 1),
  femininePast: Word('вытерла', 1),
  neuterPast: Word('вытерло', 1),
  pluralPast: Word('вытерли', 1),
  imperativeInformal: Word('вытри', 1),
  imperativeFormal: Word('вытрите', 1),
  imperfect: ['вытирать'],
};

perfectVerbs.set(вытереть.name.text, вытереть);

export { вытереть };