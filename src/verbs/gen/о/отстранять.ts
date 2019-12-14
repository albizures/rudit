import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстранять: PerfectVerb = {
  name: Word('отстранять', 7),
  singular1stPerson: Word('отстраняю', 7),
  singular2ndPerson: Word('отстраняешь', 7),
  singular3rdPerson: Word('отстраняет', 7),
  plural1stPerson: Word('отстраняем', 7),
  plural2ndPerson: Word('отстраняете', 7),
  plural3rdPerson: Word('отстраняют', 7),
  masculinePast: Word('отстранял', 7),
  femininePast: Word('отстраняла', 7),
  neuterPast: Word('отстраняло', 7),
  pluralPast: Word('отстраняли', 7),
  imperativeInformal: Word('отстраняй', 7),
  imperativeFormal: Word('отстраняйте', 7),
  imperfect: [],
};

perfectVerbs.set(отстранять.name.text, отстранять);

export { отстранять };