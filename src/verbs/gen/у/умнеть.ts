import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умнеть: PerfectVerb = {
  name: Word('умнеть', 3),
  singular1stPerson: Word('умнею', 3),
  singular2ndPerson: Word('умнеешь', 3),
  singular3rdPerson: Word('умнеет', 3),
  plural1stPerson: Word('умнеем', 3),
  plural2ndPerson: Word('умнеете', 3),
  plural3rdPerson: Word('умнеют', 3),
  masculinePast: Word('умнел', 3),
  femininePast: Word('умнела', 3),
  neuterPast: Word('умнело', 3),
  pluralPast: Word('умнели', 3),
  imperativeInformal: Word('умней', 3),
  imperativeFormal: Word('умнейте', 3),
  imperfect: [],
};

perfectVerbs.set(умнеть.name.text, умнеть);

export { умнеть };