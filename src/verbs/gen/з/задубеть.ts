import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задубеть: PerfectVerb = {
  name: Word('задубеть', 5),
  singular1stPerson: Word('задубею', 5),
  singular2ndPerson: Word('задубеешь', 5),
  singular3rdPerson: Word('задубеет', 5),
  plural1stPerson: Word('задубеем', 5),
  plural2ndPerson: Word('задубеете', 5),
  plural3rdPerson: Word('задубеют', 5),
  masculinePast: Word('задубел', 5),
  femininePast: Word('задубела', 5),
  neuterPast: Word('задубело', 5),
  pluralPast: Word('задубели', 5),
  imperativeInformal: Word('задубей', 5),
  imperativeFormal: Word('задубейте', 5),
  imperfect: [],
};

perfectVerbs.set(задубеть.name.text, задубеть);

export { задубеть };