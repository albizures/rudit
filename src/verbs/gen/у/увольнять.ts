import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увольнять: PerfectVerb = {
  name: Word('увольнять', 6),
  singular1stPerson: Word('увольняю', 6),
  singular2ndPerson: Word('увольняешь', 6),
  singular3rdPerson: Word('увольняет', 6),
  plural1stPerson: Word('увольняем', 6),
  plural2ndPerson: Word('увольняете', 6),
  plural3rdPerson: Word('увольняют', 6),
  masculinePast: Word('увольнял', 6),
  femininePast: Word('увольняла', 6),
  neuterPast: Word('увольняло', 6),
  pluralPast: Word('увольняли', 6),
  imperativeInformal: Word('увольняй', 6),
  imperativeFormal: Word('увольняйте', 6),
  imperfect: ['уволить'],
};

perfectVerbs.set(увольнять.name.text, увольнять);

export { увольнять };