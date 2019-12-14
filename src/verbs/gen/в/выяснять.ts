import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выяснять: PerfectVerb = {
  name: Word('выяснять', 5),
  singular1stPerson: Word('выясняю', 5),
  singular2ndPerson: Word('выясняешь', 5),
  singular3rdPerson: Word('выясняет', 5),
  plural1stPerson: Word('выясняем', 5),
  plural2ndPerson: Word('выясняете', 5),
  plural3rdPerson: Word('выясняют', 5),
  masculinePast: Word('выяснял', 5),
  femininePast: Word('выясняла', 5),
  neuterPast: Word('выясняло', 5),
  pluralPast: Word('выясняли', 5),
  imperativeInformal: Word('выясняй', 5),
  imperativeFormal: Word('выясняйте', 5),
  imperfect: ['выяснить'],
};

perfectVerbs.set(выяснять.name.text, выяснять);

export { выяснять };