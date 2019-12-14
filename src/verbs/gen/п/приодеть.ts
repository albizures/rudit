import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приодеть: PerfectVerb = {
  name: Word('приодеть', 5),
  singular1stPerson: Word('приодену', 5),
  singular2ndPerson: Word('приоденешь', 5),
  singular3rdPerson: Word('приоденет', 5),
  plural1stPerson: Word('приоденем', 5),
  plural2ndPerson: Word('приоденете', 5),
  plural3rdPerson: Word('приоденут', 5),
  masculinePast: Word('приодел', 5),
  femininePast: Word('приодела', 5),
  neuterPast: Word('приодело', 5),
  pluralPast: Word('приодели', 5),
  imperativeInformal: Word('приодень', 5),
  imperativeFormal: Word('приоденьте', 5),
  imperfect: [],
};

perfectVerbs.set(приодеть.name.text, приодеть);

export { приодеть };