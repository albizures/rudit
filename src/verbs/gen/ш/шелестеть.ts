import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шелестеть: PerfectVerb = {
  name: Word('шелестеть', 6),
  singular1stPerson: Word('шелещу', 5),
  singular2ndPerson: Word('шелестишь', 6),
  singular3rdPerson: Word('шелестит', 6),
  plural1stPerson: Word('шелестим', 6),
  plural2ndPerson: Word('шелестите', 6),
  plural3rdPerson: Word('шелестят', 6),
  masculinePast: Word('шелестел', 6),
  femininePast: Word('шелестела', 6),
  neuterPast: Word('шелестело', 6),
  pluralPast: Word('шелестели', 6),
  imperativeInformal: Word('шелести', 6),
  imperativeFormal: Word('шелестите', 6),
  imperfect: [],
};

perfectVerbs.set(шелестеть.name.text, шелестеть);

export { шелестеть };