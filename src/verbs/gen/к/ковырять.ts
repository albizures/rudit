import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ковырять: PerfectVerb = {
  name: Word('ковырять', 5),
  singular1stPerson: Word('ковыряю', 5),
  singular2ndPerson: Word('ковыряешь', 5),
  singular3rdPerson: Word('ковыряет', 5),
  plural1stPerson: Word('ковыряем', 5),
  plural2ndPerson: Word('ковыряете', 5),
  plural3rdPerson: Word('ковыряют', 5),
  masculinePast: Word('ковырял', 5),
  femininePast: Word('ковыряла', 5),
  neuterPast: Word('ковыряло', 5),
  pluralPast: Word('ковыряли', 5),
  imperativeInformal: Word('ковыряй', 5),
  imperativeFormal: Word('ковыряйте', 5),
  imperfect: [],
};

perfectVerbs.set(ковырять.name.text, ковырять);

export { ковырять };