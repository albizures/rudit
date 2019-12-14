import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подойти: PerfectVerb = {
  name: Word('подойти', 6),
  singular1stPerson: Word('подойду', 6),
  singular2ndPerson: Word('подойдёшь', 1),
  singular3rdPerson: Word('подойдёт', 1),
  plural1stPerson: Word('подойдём', 1),
  plural2ndPerson: Word('подойдёте', 8),
  plural3rdPerson: Word('подойдут', 6),
  masculinePast: Word('подошёл', 1),
  femininePast: Word('подошла', 6),
  neuterPast: Word('подошло', 6),
  pluralPast: Word('подошли', 6),
  imperativeInformal: Word('подойди', 6),
  imperativeFormal: Word('подойдите', 6),
  imperfect: ['подходить'],
};

perfectVerbs.set(подойти.name.text, подойти);

export { подойти };