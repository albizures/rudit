import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажелтеть: PerfectVerb = {
  name: Word('зажелтеть', 6),
  singular1stPerson: Word('зажелтею', 6),
  singular2ndPerson: Word('зажелтеешь', 6),
  singular3rdPerson: Word('зажелтеет', 6),
  plural1stPerson: Word('зажелтеем', 6),
  plural2ndPerson: Word('зажелтеете', 6),
  plural3rdPerson: Word('зажелтеют', 6),
  masculinePast: Word('зажелтел', 6),
  femininePast: Word('зажелтела', 6),
  neuterPast: Word('зажелтело', 6),
  pluralPast: Word('зажелтели', 6),
  imperativeInformal: Word('зажелтей', 6),
  imperativeFormal: Word('зажелтейте', 6),
  imperfect: [],
};

perfectVerbs.set(зажелтеть.name.text, зажелтеть);

export { зажелтеть };