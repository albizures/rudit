import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкоренять: PerfectVerb = {
  name: Word('вкоренять', 6),
  singular1stPerson: Word('вкореняю', 6),
  singular2ndPerson: Word('вкореняешь', 6),
  singular3rdPerson: Word('вкореняет', 6),
  plural1stPerson: Word('вкореняем', 6),
  plural2ndPerson: Word('вкореняете', 6),
  plural3rdPerson: Word('вкореняют', 6),
  masculinePast: Word('вкоренял', 6),
  femininePast: Word('вкореняла', 6),
  neuterPast: Word('вкореняло', 6),
  pluralPast: Word('вкореняли', 6),
  imperativeInformal: Word('вкореняй', 6),
  imperativeFormal: Word('вкореняйте', 6),
  imperfect: [],
};

perfectVerbs.set(вкоренять.name.text, вкоренять);

export { вкоренять };