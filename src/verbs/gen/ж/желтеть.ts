import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const желтеть: PerfectVerb = {
  name: Word('желтеть', 4),
  singular1stPerson: Word('желтею', 4),
  singular2ndPerson: Word('желтеешь', 4),
  singular3rdPerson: Word('желтеет', 4),
  plural1stPerson: Word('желтеем', 4),
  plural2ndPerson: Word('желтеете', 4),
  plural3rdPerson: Word('желтеют', 4),
  masculinePast: Word('желтел', 4),
  femininePast: Word('желтела', 4),
  neuterPast: Word('желтело', 4),
  pluralPast: Word('желтели', 4),
  imperativeInformal: Word('желтей', 4),
  imperativeFormal: Word('желтейте', 4),
  imperfect: [],
};

perfectVerbs.set(желтеть.name.text, желтеть);

export { желтеть };