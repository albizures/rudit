import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оробеть: PerfectVerb = {
  name: Word('оробеть', 4),
  singular1stPerson: Word('оробею', 4),
  singular2ndPerson: Word('оробеешь', 4),
  singular3rdPerson: Word('оробеет', 4),
  plural1stPerson: Word('оробеем', 4),
  plural2ndPerson: Word('оробеете', 4),
  plural3rdPerson: Word('оробеют', 4),
  masculinePast: Word('оробел', 4),
  femininePast: Word('оробела', 4),
  neuterPast: Word('оробело', 4),
  pluralPast: Word('оробели', 4),
  imperativeInformal: Word('оробей', 4),
  imperativeFormal: Word('оробейте', 4),
  imperfect: [],
};

perfectVerbs.set(оробеть.name.text, оробеть);

export { оробеть };