import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уяснять: PerfectVerb = {
  name: Word('уяснять', 4),
  singular1stPerson: Word('уясняю', 4),
  singular2ndPerson: Word('уясняешь', 4),
  singular3rdPerson: Word('уясняет', 4),
  plural1stPerson: Word('уясняем', 4),
  plural2ndPerson: Word('уясняете', 4),
  plural3rdPerson: Word('уясняют', 4),
  masculinePast: Word('уяснял', 4),
  femininePast: Word('уясняла', 4),
  neuterPast: Word('уясняло', 4),
  pluralPast: Word('уясняли', 4),
  imperativeInformal: Word('уясняй', 4),
  imperativeFormal: Word('уясняйте', 4),
  imperfect: [],
};

perfectVerbs.set(уяснять.name.text, уяснять);

export { уяснять };