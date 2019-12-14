import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сробеть: PerfectVerb = {
  name: Word('сробеть', 4),
  singular1stPerson: Word('сробею', 4),
  singular2ndPerson: Word('сробеешь', 4),
  singular3rdPerson: Word('сробеет', 4),
  plural1stPerson: Word('сробеем', 4),
  plural2ndPerson: Word('сробеете', 4),
  plural3rdPerson: Word('сробеют', 4),
  masculinePast: Word('сробел', 4),
  femininePast: Word('сробела', 4),
  neuterPast: Word('сробело', 4),
  pluralPast: Word('сробели', 4),
  imperativeInformal: Word('сробей', 4),
  imperativeFormal: Word('сробейте', 4),
  imperfect: [],
};

perfectVerbs.set(сробеть.name.text, сробеть);

export { сробеть };