import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const теплеть: PerfectVerb = {
  name: Word('теплеть', 4),
  singular1stPerson: Word('теплею', 4),
  singular2ndPerson: Word('теплеешь', 4),
  singular3rdPerson: Word('теплеет', 4),
  plural1stPerson: Word('теплеем', 4),
  plural2ndPerson: Word('теплеете', 4),
  plural3rdPerson: Word('теплеют', 4),
  masculinePast: Word('теплел', 4),
  femininePast: Word('теплела', 4),
  neuterPast: Word('теплело', 4),
  pluralPast: Word('теплели', 4),
  imperativeInformal: Word('теплей', 4),
  imperativeFormal: Word('теплейте', 4),
  imperfect: [],
};

perfectVerbs.set(теплеть.name.text, теплеть);

export { теплеть };