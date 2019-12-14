import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отойти: PerfectVerb = {
  name: Word('отойти', 5),
  singular1stPerson: Word('отойду', 5),
  singular2ndPerson: Word('отойдёшь', 5),
  singular3rdPerson: Word('отойдёт', 5),
  plural1stPerson: Word('отойдём', 5),
  plural2ndPerson: Word('отойдёте', 5),
  plural3rdPerson: Word('отойдут', 5),
  masculinePast: Word('отошёл', 4),
  femininePast: Word('отошла', 5),
  neuterPast: Word('отошло', 5),
  pluralPast: Word('отошли', 5),
  imperativeInformal: Word('отойди', 5),
  imperativeFormal: Word('отойдите', 5),
  imperfect: ['отходить'],
};

perfectVerbs.set(отойти.name.text, отойти);

export { отойти };