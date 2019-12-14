import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ненавидеть: PerfectVerb = {
  name: Word('ненавидеть', 5),
  singular1stPerson: Word('ненавижу', 5),
  singular2ndPerson: Word('ненавидишь', 5),
  singular3rdPerson: Word('ненавидит', 5),
  plural1stPerson: Word('ненавидим', 5),
  plural2ndPerson: Word('ненавидите', 5),
  plural3rdPerson: Word('ненавидят', 5),
  masculinePast: Word('ненавидел', 5),
  femininePast: Word('ненавидела', 5),
  neuterPast: Word('ненавидело', 5),
  pluralPast: Word('ненавидели', 5),
  imperativeInformal: Word('ненавидь', 5),
  imperativeFormal: Word('ненавидьте', 5),
  imperfect: ['возненавидеть'],
};

perfectVerbs.set(ненавидеть.name.text, ненавидеть);

export { ненавидеть };