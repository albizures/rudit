import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охладеть: PerfectVerb = {
  name: Word('охладеть', 5),
  singular1stPerson: Word('охладею', 5),
  singular2ndPerson: Word('охладеешь', 5),
  singular3rdPerson: Word('охладеет', 5),
  plural1stPerson: Word('охладеем', 5),
  plural2ndPerson: Word('охладеете', 5),
  plural3rdPerson: Word('охладеют', 5),
  masculinePast: Word('охладел', 5),
  femininePast: Word('охладела', 5),
  neuterPast: Word('охладело', 5),
  pluralPast: Word('охладели', 5),
  imperativeInformal: Word('охладей', 5),
  imperativeFormal: Word('охладейте', 5),
  imperfect: [],
};

perfectVerbs.set(охладеть.name.text, охладеть);

export { охладеть };