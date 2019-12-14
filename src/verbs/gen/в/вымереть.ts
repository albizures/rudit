import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымереть: PerfectVerb = {
  name: Word('вымереть', 1),
  singular1stPerson: Word('вымру', 1),
  singular2ndPerson: Word('вымрешь', 1),
  singular3rdPerson: Word('вымрет', 1),
  plural1stPerson: Word('вымрем', 1),
  plural2ndPerson: Word('вымрете', 1),
  plural3rdPerson: Word('вымрут', 1),
  masculinePast: Word('вымер', 1),
  femininePast: Word('вымерла', 1),
  neuterPast: Word('вымерло', 1),
  pluralPast: Word('вымерли', 1),
  imperativeInformal: Word('вымри', 1),
  imperativeFormal: Word('вымрите', 1),
  imperfect: ['вымирать'],
};

perfectVerbs.set(вымереть.name.text, вымереть);

export { вымереть };