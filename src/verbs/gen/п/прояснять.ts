import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прояснять: PerfectVerb = {
  name: Word('прояснять', 6),
  singular1stPerson: Word('проясняю', 6),
  singular2ndPerson: Word('проясняешь', 6),
  singular3rdPerson: Word('проясняет', 6),
  plural1stPerson: Word('проясняем', 6),
  plural2ndPerson: Word('проясняете', 6),
  plural3rdPerson: Word('проясняют', 6),
  masculinePast: Word('прояснял', 6),
  femininePast: Word('проясняла', 6),
  neuterPast: Word('проясняло', 6),
  pluralPast: Word('проясняли', 6),
  imperativeInformal: Word('проясняй', 6),
  imperativeFormal: Word('проясняйте', 6),
  imperfect: [],
};

perfectVerbs.set(прояснять.name.text, прояснять);

export { прояснять };