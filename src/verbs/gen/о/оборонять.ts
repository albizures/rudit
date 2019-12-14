import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оборонять: PerfectVerb = {
  name: Word('оборонять', 6),
  singular1stPerson: Word('обороняю', 6),
  singular2ndPerson: Word('обороняешь', 6),
  singular3rdPerson: Word('обороняет', 6),
  plural1stPerson: Word('обороняем', 6),
  plural2ndPerson: Word('обороняете', 6),
  plural3rdPerson: Word('обороняют', 6),
  masculinePast: Word('оборонял', 6),
  femininePast: Word('обороняла', 6),
  neuterPast: Word('обороняло', 6),
  pluralPast: Word('обороняли', 6),
  imperativeInformal: Word('обороняй', 6),
  imperativeFormal: Word('обороняйте', 6),
  imperfect: ['оборонить'],
};

perfectVerbs.set(оборонять.name.text, оборонять);

export { оборонять };