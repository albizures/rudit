import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъяснять: PerfectVerb = {
  name: Word('разъяснять', 7),
  singular1stPerson: Word('разъясняю', 7),
  singular2ndPerson: Word('разъясняешь', 7),
  singular3rdPerson: Word('разъясняет', 7),
  plural1stPerson: Word('разъясняем', 7),
  plural2ndPerson: Word('разъясняете', 7),
  plural3rdPerson: Word('разъясняют', 7),
  masculinePast: Word('разъяснял', 7),
  femininePast: Word('разъясняла', 7),
  neuterPast: Word('разъясняло', 7),
  pluralPast: Word('разъясняли', 7),
  imperativeInformal: Word('разъясняй', 7),
  imperativeFormal: Word('разъясняйте', 7),
  imperfect: [],
};

perfectVerbs.set(разъяснять.name.text, разъяснять);

export { разъяснять };