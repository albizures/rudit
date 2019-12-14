import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const леденеть: PerfectVerb = {
  name: Word('леденеть', 5),
  singular1stPerson: Word('леденею', 5),
  singular2ndPerson: Word('леденеешь', 5),
  singular3rdPerson: Word('леденеет', 5),
  plural1stPerson: Word('леденеем', 5),
  plural2ndPerson: Word('леденеете', 5),
  plural3rdPerson: Word('леденеют', 5),
  masculinePast: Word('леденел', 5),
  femininePast: Word('леденела', 5),
  neuterPast: Word('леденело', 5),
  pluralPast: Word('леденели', 5),
  imperativeInformal: Word('леденей', 5),
  imperativeFormal: Word('леденейте', 5),
  imperfect: [],
};

perfectVerbs.set(леденеть.name.text, леденеть);

export { леденеть };