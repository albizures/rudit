import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укоренять: PerfectVerb = {
  name: Word('укоренять', 6),
  singular1stPerson: Word('укореняю', 6),
  singular2ndPerson: Word('укореняешь', 6),
  singular3rdPerson: Word('укореняет', 6),
  plural1stPerson: Word('укореняем', 6),
  plural2ndPerson: Word('укореняете', 6),
  plural3rdPerson: Word('укореняют', 6),
  masculinePast: Word('укоренял', 6),
  femininePast: Word('укореняла', 6),
  neuterPast: Word('укореняло', 6),
  pluralPast: Word('укореняли', 6),
  imperativeInformal: Word('укореняй', 6),
  imperativeFormal: Word('укореняйте', 6),
  imperfect: [],
};

perfectVerbs.set(укоренять.name.text, укоренять);

export { укоренять };