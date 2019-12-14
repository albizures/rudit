import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поковырять: PerfectVerb = {
  name: Word('поковырять', 7),
  singular1stPerson: Word('поковыряю', 7),
  singular2ndPerson: Word('поковыряешь', 7),
  singular3rdPerson: Word('поковыряет', 7),
  plural1stPerson: Word('поковыряем', 7),
  plural2ndPerson: Word('поковыряете', 7),
  plural3rdPerson: Word('поковыряют', 7),
  masculinePast: Word('поковырял', 7),
  femininePast: Word('поковыряла', 7),
  neuterPast: Word('поковыряло', 7),
  pluralPast: Word('поковыряли', 7),
  imperativeInformal: Word('поковыряй', 7),
  imperativeFormal: Word('поковыряйте', 7),
  imperfect: [],
};

perfectVerbs.set(поковырять.name.text, поковырять);

export { поковырять };