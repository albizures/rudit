import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потускнеть: PerfectVerb = {
  name: Word('потускнеть', 7),
  singular1stPerson: Word('потускнею', 7),
  singular2ndPerson: Word('потускнеешь', 7),
  singular3rdPerson: Word('потускнеет', 7),
  plural1stPerson: Word('потускнеем', 7),
  plural2ndPerson: Word('потускнеете', 7),
  plural3rdPerson: Word('потускнеют', 7),
  masculinePast: Word('потускнел', 7),
  femininePast: Word('потускнела', 7),
  neuterPast: Word('потускнело', 7),
  pluralPast: Word('потускнели', 7),
  imperativeInformal: Word('потускней', 7),
  imperativeFormal: Word('потускнейте', 7),
  imperfect: [],
};

perfectVerbs.set(потускнеть.name.text, потускнеть);

export { потускнеть };