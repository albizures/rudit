import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const козырять: PerfectVerb = {
  name: Word('козырять', 5),
  singular1stPerson: Word('козыряю', 5),
  singular2ndPerson: Word('козыряешь', 5),
  singular3rdPerson: Word('козыряет', 5),
  plural1stPerson: Word('козыряем', 5),
  plural2ndPerson: Word('козыряете', 5),
  plural3rdPerson: Word('козыряют', 5),
  masculinePast: Word('козырял', 5),
  femininePast: Word('козыряла', 5),
  neuterPast: Word('козыряло', 5),
  pluralPast: Word('козыряли', 5),
  imperativeInformal: Word('козыряй', 5),
  imperativeFormal: Word('козыряйте', 5),
  imperfect: [],
};

perfectVerbs.set(козырять.name.text, козырять);

export { козырять };