import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъяснять: PerfectVerb = {
  name: Word('изъяснять', 6),
  singular1stPerson: Word('изъясняю', 6),
  singular2ndPerson: Word('изъясняешь', 6),
  singular3rdPerson: Word('изъясняет', 6),
  plural1stPerson: Word('изъясняем', 6),
  plural2ndPerson: Word('изъясняете', 6),
  plural3rdPerson: Word('изъясняют', 6),
  masculinePast: Word('изъяснял', 6),
  femininePast: Word('изъясняла', 6),
  neuterPast: Word('изъясняло', 6),
  pluralPast: Word('изъясняли', 6),
  imperativeInformal: Word('изъясняй', 6),
  imperativeFormal: Word('изъясняйте', 6),
  imperfect: [],
};

perfectVerbs.set(изъяснять.name.text, изъяснять);

export { изъяснять };