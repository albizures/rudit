import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полизать: PerfectVerb = {
  name: Word('полизать', 5),
  singular1stPerson: Word('полижу', 5),
  singular2ndPerson: Word('полижешь', 3),
  singular3rdPerson: Word('полижет', 3),
  plural1stPerson: Word('полижем', 3),
  plural2ndPerson: Word('полижете', 3),
  plural3rdPerson: Word('полижут', 3),
  masculinePast: Word('полизал', 5),
  femininePast: Word('полизала', 5),
  neuterPast: Word('полизало', 5),
  pluralPast: Word('полизали', 5),
  imperativeInformal: Word('полижи', 5),
  imperativeFormal: Word('полижите', 5),
  imperfect: [],
};

perfectVerbs.set(полизать.name.text, полизать);

export { полизать };