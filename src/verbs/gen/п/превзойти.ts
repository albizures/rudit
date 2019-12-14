import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превзойти: PerfectVerb = {
  name: Word('превзойти', 8),
  singular1stPerson: Word('превзойду', 8),
  singular2ndPerson: Word('превзойдёшь', 2),
  singular3rdPerson: Word('превзойдёт', 2),
  plural1stPerson: Word('превзойдём', 2),
  plural2ndPerson: Word('превзойдёте', 2),
  plural3rdPerson: Word('превзойдут', 8),
  masculinePast: Word('превзошёл', 2),
  femininePast: Word('превзошла', 8),
  neuterPast: Word('превзошло', 8),
  pluralPast: Word('превзошли', 8),
  imperativeInformal: Word('превзойди', 8),
  imperativeFormal: Word('превзойдите', 8),
  imperfect: ['превосходить'],
};

perfectVerbs.set(превзойти.name.text, превзойти);

export { превзойти };