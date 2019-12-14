import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глупеть: PerfectVerb = {
  name: Word('глупеть', 4),
  singular1stPerson: Word('глупею', 4),
  singular2ndPerson: Word('глупеешь', 4),
  singular3rdPerson: Word('глупеет', 4),
  plural1stPerson: Word('глупеем', 4),
  plural2ndPerson: Word('глупеете', 4),
  plural3rdPerson: Word('глупеют', 4),
  masculinePast: Word('глупел', 4),
  femininePast: Word('глупела', 4),
  neuterPast: Word('глупело', 4),
  pluralPast: Word('глупели', 4),
  imperativeInformal: Word('глупей', 4),
  imperativeFormal: Word('глупейте', 4),
  imperfect: [],
};

perfectVerbs.set(глупеть.name.text, глупеть);

export { глупеть };