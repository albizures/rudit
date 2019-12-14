import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преодолеть: PerfectVerb = {
  name: Word('преодолеть', 7),
  singular1stPerson: Word('преодолею', 7),
  singular2ndPerson: Word('преодолеешь', 7),
  singular3rdPerson: Word('преодолеет', 7),
  plural1stPerson: Word('преодолеем', 7),
  plural2ndPerson: Word('преодолеете', 7),
  plural3rdPerson: Word('преодолеют', 7),
  masculinePast: Word('преодолел', 7),
  femininePast: Word('преодолела', 7),
  neuterPast: Word('преодолело', 7),
  pluralPast: Word('преодолели', 7),
  imperativeInformal: Word('преодолей', 7),
  imperativeFormal: Word('преодолейте', 7),
  imperfect: [],
};

perfectVerbs.set(преодолеть.name.text, преодолеть);

export { преодолеть };