import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расковырять: PerfectVerb = {
  name: Word('расковырять', 8),
  singular1stPerson: Word('расковыряю', 8),
  singular2ndPerson: Word('расковыряешь', 8),
  singular3rdPerson: Word('расковыряет', 8),
  plural1stPerson: Word('расковыряем', 8),
  plural2ndPerson: Word('расковыряете', 8),
  plural3rdPerson: Word('расковыряют', 8),
  masculinePast: Word('расковырял', 8),
  femininePast: Word('расковыряла', 8),
  neuterPast: Word('расковыряло', 8),
  pluralPast: Word('расковыряли', 8),
  imperativeInformal: Word('расковыряй', 8),
  imperativeFormal: Word('расковыряйте', 8),
  imperfect: [],
};

perfectVerbs.set(расковырять.name.text, расковырять);

export { расковырять };