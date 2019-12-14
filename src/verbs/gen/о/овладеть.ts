import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const овладеть: PerfectVerb = {
  name: Word('овладеть', 5),
  singular1stPerson: Word('овладею', 5),
  singular2ndPerson: Word('овладеешь', 5),
  singular3rdPerson: Word('овладеет', 5),
  plural1stPerson: Word('овладеем', 5),
  plural2ndPerson: Word('овладеете', 5),
  plural3rdPerson: Word('овладеют', 5),
  masculinePast: Word('овладел', 5),
  femininePast: Word('овладела', 5),
  neuterPast: Word('овладело', 5),
  pluralPast: Word('овладели', 5),
  imperativeInformal: Word('овладей', 5),
  imperativeFormal: Word('овладейте', 5),
  imperfect: [],
};

perfectVerbs.set(овладеть.name.text, овладеть);

export { овладеть };