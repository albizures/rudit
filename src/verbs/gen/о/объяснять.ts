import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объяснять: PerfectVerb = {
  name: Word('объяснять', 6),
  singular1stPerson: Word('объясняю', 6),
  singular2ndPerson: Word('объясняешь', 6),
  singular3rdPerson: Word('объясняет', 6),
  plural1stPerson: Word('объясняем', 6),
  plural2ndPerson: Word('объясняете', 6),
  plural3rdPerson: Word('объясняют', 6),
  masculinePast: Word('объяснял', 6),
  femininePast: Word('объясняла', 6),
  neuterPast: Word('объясняло', 6),
  pluralPast: Word('объясняли', 6),
  imperativeInformal: Word('объясняй', 6),
  imperativeFormal: Word('объясняйте', 6),
  imperfect: ['объяснить'],
};

perfectVerbs.set(объяснять.name.text, объяснять);

export { объяснять };