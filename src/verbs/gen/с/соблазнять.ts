import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соблазнять: PerfectVerb = {
  name: Word('соблазнять', 7),
  singular1stPerson: Word('соблазняю', 7),
  singular2ndPerson: Word('соблазняешь', 7),
  singular3rdPerson: Word('соблазняет', 7),
  plural1stPerson: Word('соблазняем', 7),
  plural2ndPerson: Word('соблазняете', 7),
  plural3rdPerson: Word('соблазняют', 7),
  masculinePast: Word('соблазнял', 7),
  femininePast: Word('соблазняла', 7),
  neuterPast: Word('соблазняло', 7),
  pluralPast: Word('соблазняли', 7),
  imperativeInformal: Word('соблазняй', 7),
  imperativeFormal: Word('соблазняйте', 7),
  imperfect: ['соблазнить'],
};

perfectVerbs.set(соблазнять.name.text, соблазнять);

export { соблазнять };