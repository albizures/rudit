import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загалдеть: PerfectVerb = {
  name: Word('загалдеть', 6),
  singular1stPerson: Word('загалжу', 6),
  singular2ndPerson: Word('загалдишь', 6),
  singular3rdPerson: Word('загалдит', 6),
  plural1stPerson: Word('загалдим', 6),
  plural2ndPerson: Word('загалдите', 6),
  plural3rdPerson: Word('загалдят', 6),
  masculinePast: Word('загалдел', 6),
  femininePast: Word('загалдела', 6),
  neuterPast: Word('загалдело', 6),
  pluralPast: Word('загалдели', 6),
  imperativeInformal: Word('загалди', 6),
  imperativeFormal: Word('загалдите', 6),
  imperfect: [],
};

perfectVerbs.set(загалдеть.name.text, загалдеть);

export { загалдеть };