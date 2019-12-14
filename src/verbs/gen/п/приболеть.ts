import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приболеть: PerfectVerb = {
  name: Word('приболеть', 6),
  singular1stPerson: Word('приболею', 6),
  singular2ndPerson: Word('приболеешь', 6),
  singular3rdPerson: Word('приболеет', 6),
  plural1stPerson: Word('приболеем', 6),
  plural2ndPerson: Word('приболеете', 6),
  plural3rdPerson: Word('приболеют', 6),
  masculinePast: Word('приболел', 6),
  femininePast: Word('приболела', 6),
  neuterPast: Word('приболело', 6),
  pluralPast: Word('приболели', 6),
  imperativeInformal: Word('приболей', 6),
  imperativeFormal: Word('приболейте', 6),
  imperfect: [],
};

perfectVerbs.set(приболеть.name.text, приболеть);

export { приболеть };