import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сомлеть: PerfectVerb = {
  name: Word('сомлеть', 4),
  singular1stPerson: Word('сомлею', 4),
  singular2ndPerson: Word('сомлеешь', 4),
  singular3rdPerson: Word('сомлеет', 4),
  plural1stPerson: Word('сомлеем', 4),
  plural2ndPerson: Word('сомлеете', 4),
  plural3rdPerson: Word('сомлеют', 4),
  masculinePast: Word('сомлел', 4),
  femininePast: Word('сомлела', 4),
  neuterPast: Word('сомлело', 4),
  pluralPast: Word('сомлели', 4),
  imperativeInformal: Word('сомлей', 4),
  imperativeFormal: Word('сомлейте', 4),
  imperfect: [],
};

perfectVerbs.set(сомлеть.name.text, сомлеть);

export { сомлеть };