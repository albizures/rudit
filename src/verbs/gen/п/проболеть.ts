import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проболеть: PerfectVerb = {
  name: Word('проболеть', 6),
  singular1stPerson: Word('проболею', 6),
  singular2ndPerson: Word('проболеешь', 6),
  singular3rdPerson: Word('проболеет', 6),
  plural1stPerson: Word('проболеем', 6),
  plural2ndPerson: Word('проболеете', 6),
  plural3rdPerson: Word('проболеют', 6),
  masculinePast: Word('проболел', 6),
  femininePast: Word('проболела', 6),
  neuterPast: Word('проболело', 6),
  pluralPast: Word('проболели', 6),
  imperativeInformal: Word('проболей', 6),
  imperativeFormal: Word('проболейте', 6),
  imperfect: [],
};

perfectVerbs.set(проболеть.name.text, проболеть);

export { проболеть };