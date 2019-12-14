import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прослышать: PerfectVerb = {
  name: Word('прослышать', 5),
  singular1stPerson: Word('прослышу', 5),
  singular2ndPerson: Word('прослышишь', 5),
  singular3rdPerson: Word('прослышит', 5),
  plural1stPerson: Word('прослышим', 5),
  plural2ndPerson: Word('прослышите', 5),
  plural3rdPerson: Word('прослышат', 5),
  masculinePast: Word('прослышал', 5),
  femininePast: Word('прослышала', 5),
  neuterPast: Word('прослышало', 5),
  pluralPast: Word('прослышали', 5),
  imperativeInformal: Word('прослышь', 5),
  imperativeFormal: Word('прослышьте', 5),
  imperfect: [],
};

perfectVerbs.set(прослышать.name.text, прослышать);

export { прослышать };