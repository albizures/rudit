import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изойти: PerfectVerb = {
  name: Word('изойти', 5),
  singular1stPerson: Word('изойду', 5),
  singular2ndPerson: Word('изойдёшь', 0),
  singular3rdPerson: Word('изойдёт', 0),
  plural1stPerson: Word('изойдём', 0),
  plural2ndPerson: Word('изойдёте', 7),
  plural3rdPerson: Word('изойдут', 5),
  masculinePast: Word('изошёл', 0),
  femininePast: Word('изошла', 5),
  neuterPast: Word('изошло', 5),
  pluralPast: Word('изошли', 5),
  imperativeInformal: Word('изойди', 5),
  imperativeFormal: Word('изойдите', 5),
  imperfect: [],
};

perfectVerbs.set(изойти.name.text, изойти);

export { изойти };