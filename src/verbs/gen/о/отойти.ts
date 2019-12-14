import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отойти: PerfectVerb = {
  name: Word('отойти', 5),
  singular1stPerson: Word('отойду', 5),
  singular2ndPerson: Word('отойдёшь', 0),
  singular3rdPerson: Word('отойдёт', 0),
  plural1stPerson: Word('отойдём', 0),
  plural2ndPerson: Word('отойдёте', 7),
  plural3rdPerson: Word('отойдут', 5),
  masculinePast: Word('отошёл', 0),
  femininePast: Word('отошла', 5),
  neuterPast: Word('отошло', 5),
  pluralPast: Word('отошли', 5),
  imperativeInformal: Word('отойди', 5),
  imperativeFormal: Word('отойдите', 5),
  imperfect: ['отходить'],
};

perfectVerbs.set(отойти.name.text, отойти);

export { отойти };