import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const швырять: PerfectVerb = {
  name: Word('швырять', 4),
  singular1stPerson: Word('швыряю', 4),
  singular2ndPerson: Word('швыряешь', 4),
  singular3rdPerson: Word('швыряет', 4),
  plural1stPerson: Word('швыряем', 4),
  plural2ndPerson: Word('швыряете', 4),
  plural3rdPerson: Word('швыряют', 4),
  masculinePast: Word('швырял', 4),
  femininePast: Word('швыряла', 4),
  neuterPast: Word('швыряло', 4),
  pluralPast: Word('швыряли', 4),
  imperativeInformal: Word('швыряй', 4),
  imperativeFormal: Word('швыряйте', 4),
  imperfect: [],
};

perfectVerbs.set(швырять.name.text, швырять);

export { швырять };