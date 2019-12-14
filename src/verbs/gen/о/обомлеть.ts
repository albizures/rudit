import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обомлеть: PerfectVerb = {
  name: Word('обомлеть', 5),
  singular1stPerson: Word('обомлею', 5),
  singular2ndPerson: Word('обомлеешь', 5),
  singular3rdPerson: Word('обомлеет', 5),
  plural1stPerson: Word('обомлеем', 5),
  plural2ndPerson: Word('обомлеете', 5),
  plural3rdPerson: Word('обомлеют', 5),
  masculinePast: Word('обомлел', 5),
  femininePast: Word('обомлела', 5),
  neuterPast: Word('обомлело', 5),
  pluralPast: Word('обомлели', 5),
  imperativeInformal: Word('обомлей', 5),
  imperativeFormal: Word('обомлейте', 5),
  imperfect: [],
};

perfectVerbs.set(обомлеть.name.text, обомлеть);

export { обомлеть };