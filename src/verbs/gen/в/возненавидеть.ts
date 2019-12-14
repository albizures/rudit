import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возненавидеть: PerfectVerb = {
  name: Word('возненавидеть', 8),
  singular1stPerson: Word('возненавижу', 8),
  singular2ndPerson: Word('возненавидишь', 8),
  singular3rdPerson: Word('возненавидит', 8),
  plural1stPerson: Word('возненавидим', 8),
  plural2ndPerson: Word('возненавидите', 8),
  plural3rdPerson: Word('возненавидят', 8),
  masculinePast: Word('возненавидел', 8),
  femininePast: Word('возненавидела', 8),
  neuterPast: Word('возненавидело', 8),
  pluralPast: Word('возненавидели', 8),
  imperativeInformal: Word('возненавидь', 8),
  imperativeFormal: Word('возненавидьте', 8),
  imperfect: ['ненавидеть'],
};

perfectVerbs.set(возненавидеть.name.text, возненавидеть);

export { возненавидеть };