import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обойти: PerfectVerb = {
  name: Word('обойти', 5),
  singular1stPerson: Word('обойду', 5),
  singular2ndPerson: Word('обойдёшь', 5),
  singular3rdPerson: Word('обойдёт', 5),
  plural1stPerson: Word('обойдём', 5),
  plural2ndPerson: Word('обойдёте', 5),
  plural3rdPerson: Word('обойдут', 5),
  masculinePast: Word('обошёл', 4),
  femininePast: Word('обошла', 5),
  neuterPast: Word('обошло', 5),
  pluralPast: Word('обошли', 5),
  imperativeInformal: Word('обойди', 5),
  imperativeFormal: Word('обойдите', 5),
  imperfect: ['обходить'],
};

perfectVerbs.set(обойти.name.text, обойти);

export { обойти };