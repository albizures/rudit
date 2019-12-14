import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылизать: PerfectVerb = {
  name: Word('вылизать', 1),
  singular1stPerson: Word('вылижу', 1),
  singular2ndPerson: Word('вылижешь', 1),
  singular3rdPerson: Word('вылижет', 1),
  plural1stPerson: Word('вылижем', 1),
  plural2ndPerson: Word('вылижете', 1),
  plural3rdPerson: Word('вылижут', 1),
  masculinePast: Word('вылизал', 1),
  femininePast: Word('вылизала', 1),
  neuterPast: Word('вылизало', 1),
  pluralPast: Word('вылизали', 1),
  imperativeInformal: Word('вылижи', 1),
  imperativeFormal: Word('вылижите', 1),
  imperfect: [],
};

perfectVerbs.set(вылизать.name.text, вылизать);

export { вылизать };