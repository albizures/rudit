import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взойти: PerfectVerb = {
  name: Word('взойти', 5),
  singular1stPerson: Word('взойду', 5),
  singular2ndPerson: Word('взойдёшь', 5),
  singular3rdPerson: Word('взойдёт', 5),
  plural1stPerson: Word('взойдём', 5),
  plural2ndPerson: Word('взойдёте', 5),
  plural3rdPerson: Word('взойдут', 5),
  masculinePast: Word('взошёл', 4),
  femininePast: Word('взошла', 5),
  neuterPast: Word('взошло', 5),
  pluralPast: Word('взошли', 5),
  imperativeInformal: Word('взойди', 5),
  imperativeFormal: Word('взойдите', 5),
  imperfect: ['всходить'],
};

perfectVerbs.set(взойти.name.text, взойти);

export { взойти };