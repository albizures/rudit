import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожелтеть: PerfectVerb = {
  name: Word('пожелтеть', 6),
  singular1stPerson: Word('пожелтею', 6),
  singular2ndPerson: Word('пожелтеешь', 6),
  singular3rdPerson: Word('пожелтеет', 6),
  plural1stPerson: Word('пожелтеем', 6),
  plural2ndPerson: Word('пожелтеете', 6),
  plural3rdPerson: Word('пожелтеют', 6),
  masculinePast: Word('пожелтел', 6),
  femininePast: Word('пожелтела', 6),
  neuterPast: Word('пожелтело', 6),
  pluralPast: Word('пожелтели', 6),
  imperativeInformal: Word('пожелтей', 6),
  imperativeFormal: Word('пожелтейте', 6),
  imperfect: [],
};

perfectVerbs.set(пожелтеть.name.text, пожелтеть);

export { пожелтеть };