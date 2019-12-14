import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пояснять: PerfectVerb = {
  name: Word('пояснять', 5),
  singular1stPerson: Word('поясняю', 5),
  singular2ndPerson: Word('поясняешь', 5),
  singular3rdPerson: Word('поясняет', 5),
  plural1stPerson: Word('поясняем', 5),
  plural2ndPerson: Word('поясняете', 5),
  plural3rdPerson: Word('поясняют', 5),
  masculinePast: Word('пояснял', 5),
  femininePast: Word('поясняла', 5),
  neuterPast: Word('поясняло', 5),
  pluralPast: Word('поясняли', 5),
  imperativeInformal: Word('поясняй', 5),
  imperativeFormal: Word('поясняйте', 5),
  imperfect: ['[[пояснить'],
};

perfectVerbs.set(пояснять.name.text, пояснять);

export { пояснять };