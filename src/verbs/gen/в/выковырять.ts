import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выковырять: PerfectVerb = {
  name: Word('выковырять', 1),
  singular1stPerson: Word('выковыряю', 1),
  singular2ndPerson: Word('выковыряешь', 1),
  singular3rdPerson: Word('выковыряет', 1),
  plural1stPerson: Word('выковыряем', 1),
  plural2ndPerson: Word('выковыряете', 1),
  plural3rdPerson: Word('выковыряют', 1),
  masculinePast: Word('выковырял', 1),
  femininePast: Word('выковыряла', 1),
  neuterPast: Word('выковыряло', 1),
  pluralPast: Word('выковыряли', 1),
  imperativeInformal: Word('выковыряй', 1),
  imperativeFormal: Word('выковыряйте', 1),
  imperfect: [],
};

perfectVerbs.set(выковырять.name.text, выковырять);

export { выковырять };