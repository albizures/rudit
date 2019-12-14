import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const линять: PerfectVerb = {
  name: Word('линять', 3),
  singular1stPerson: Word('линяю', 3),
  singular2ndPerson: Word('линяешь', 3),
  singular3rdPerson: Word('линяет', 3),
  plural1stPerson: Word('линяем', 3),
  plural2ndPerson: Word('линяете', 3),
  plural3rdPerson: Word('линяют', 3),
  masculinePast: Word('линял', 3),
  femininePast: Word('линяла', 3),
  neuterPast: Word('линяло', 3),
  pluralPast: Word('линяли', 3),
  imperativeInformal: Word('линяй', 3),
  imperativeFormal: Word('линяйте', 3),
  imperfect: [],
};

perfectVerbs.set(линять.name.text, линять);

export { линять };