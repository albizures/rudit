import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сожалеть: PerfectVerb = {
  name: Word('сожалеть', 5),
  singular1stPerson: Word('сожалею', 5),
  singular2ndPerson: Word('сожалеешь', 5),
  singular3rdPerson: Word('сожалеет', 5),
  plural1stPerson: Word('сожалеем', 5),
  plural2ndPerson: Word('сожалеете', 5),
  plural3rdPerson: Word('сожалеют', 5),
  masculinePast: Word('сожалел', 5),
  femininePast: Word('сожалела', 5),
  neuterPast: Word('сожалело', 5),
  pluralPast: Word('сожалели', 5),
  imperativeInformal: Word('сожалей', 5),
  imperativeFormal: Word('сожалейте', 5),
  imperfect: [],
};

perfectVerbs.set(сожалеть.name.text, сожалеть);

export { сожалеть };