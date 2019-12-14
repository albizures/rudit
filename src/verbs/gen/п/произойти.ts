import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const произойти: PerfectVerb = {
  name: Word('произойти', 8),
  singular1stPerson: Word('произойду', 8),
  singular2ndPerson: Word('произойдёшь', 8),
  singular3rdPerson: Word('произойдёт', 8),
  plural1stPerson: Word('произойдём', 8),
  plural2ndPerson: Word('произойдёте', 8),
  plural3rdPerson: Word('произойдут', 8),
  masculinePast: Word('произошёл', 7),
  femininePast: Word('произошла', 8),
  neuterPast: Word('произошло', 8),
  pluralPast: Word('произошли', 8),
  imperativeInformal: Word('произойди', 8),
  imperativeFormal: Word('произойдите', 8),
  imperfect: ['происходить'],
};

perfectVerbs.set(произойти.name.text, произойти);

export { произойти };