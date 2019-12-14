import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шуршать: PerfectVerb = {
  name: Word('шуршать', 4),
  singular1stPerson: Word('шуршу', 4),
  singular2ndPerson: Word('шуршишь', 4),
  singular3rdPerson: Word('шуршит', 4),
  plural1stPerson: Word('шуршим', 4),
  plural2ndPerson: Word('шуршите', 4),
  plural3rdPerson: Word('шуршат', 4),
  masculinePast: Word('шуршал', 4),
  femininePast: Word('шуршала', 4),
  neuterPast: Word('шуршало', 4),
  pluralPast: Word('шуршали', 4),
  imperativeInformal: Word('шурши', 4),
  imperativeFormal: Word('шуршите', 4),
  imperfect: [],
};

perfectVerbs.set(шуршать.name.text, шуршать);

export { шуршать };