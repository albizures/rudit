import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошелестеть: PerfectVerb = {
  name: Word('прошелестеть', 9),
  singular1stPerson: Word('прошелещу', 8),
  singular2ndPerson: Word('прошелестишь', 9),
  singular3rdPerson: Word('прошелестит', 9),
  plural1stPerson: Word('прошелестим', 9),
  plural2ndPerson: Word('прошелестите', 9),
  plural3rdPerson: Word('прошелестят', 9),
  masculinePast: Word('прошелестел', 9),
  femininePast: Word('прошелестела', 9),
  neuterPast: Word('прошелестело', 9),
  pluralPast: Word('прошелестели', 9),
  imperativeInformal: Word('прошелести', 9),
  imperativeFormal: Word('прошелестите', 9),
  imperfect: [],
};

perfectVerbs.set(прошелестеть.name.text, прошелестеть);

export { прошелестеть };