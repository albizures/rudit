import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недослышать: PerfectVerb = {
  name: Word('недослышать', 6),
  singular1stPerson: Word('недослышу', 6),
  singular2ndPerson: Word('недослышишь', 6),
  singular3rdPerson: Word('недослышит', 6),
  plural1stPerson: Word('недослышим', 6),
  plural2ndPerson: Word('недослышите', 6),
  plural3rdPerson: Word('недослышат', 6),
  masculinePast: Word('недослышал', 6),
  femininePast: Word('недослышала', 6),
  neuterPast: Word('недослышало', 6),
  pluralPast: Word('недослышали', 6),
  imperativeInformal: Word('недослышь', 6),
  imperativeFormal: Word('недослышьте', 6),
  imperfect: [],
};

perfectVerbs.set(недослышать.name.text, недослышать);

export { недослышать };