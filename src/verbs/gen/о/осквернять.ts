import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осквернять: PerfectVerb = {
  name: Word('осквернять', 7),
  singular1stPerson: Word('оскверняю', 7),
  singular2ndPerson: Word('оскверняешь', 7),
  singular3rdPerson: Word('оскверняет', 7),
  plural1stPerson: Word('оскверняем', 7),
  plural2ndPerson: Word('оскверняете', 7),
  plural3rdPerson: Word('оскверняют', 7),
  masculinePast: Word('осквернял', 7),
  femininePast: Word('оскверняла', 7),
  neuterPast: Word('оскверняло', 7),
  pluralPast: Word('оскверняли', 7),
  imperativeInformal: Word('оскверняй', 7),
  imperativeFormal: Word('оскверняйте', 7),
  imperfect: [],
};

perfectVerbs.set(осквернять.name.text, осквернять);

export { осквернять };