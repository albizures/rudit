import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подышать: PerfectVerb = {
  name: Word('подышать', 5),
  singular1stPerson: Word('подышу', 5),
  singular2ndPerson: Word('подышишь', 3),
  singular3rdPerson: Word('подышит', 3),
  plural1stPerson: Word('подышим', 3),
  plural2ndPerson: Word('подышите', 3),
  plural3rdPerson: Word('подышат', 3),
  masculinePast: Word('подышал', 5),
  femininePast: Word('подышала', 5),
  neuterPast: Word('подышало', 5),
  pluralPast: Word('подышали', 5),
  imperativeInformal: Word('подыши', 5),
  imperativeFormal: Word('подышите', 5),
  imperfect: [],
};

perfectVerbs.set(подышать.name.text, подышать);

export { подышать };