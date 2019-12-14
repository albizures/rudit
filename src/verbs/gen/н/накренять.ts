import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накренять: PerfectVerb = {
  name: Word('накренять', 6),
  singular1stPerson: Word('накреняю', 6),
  singular2ndPerson: Word('накреняешь', 6),
  singular3rdPerson: Word('накреняет', 6),
  plural1stPerson: Word('накреняем', 6),
  plural2ndPerson: Word('накреняете', 6),
  plural3rdPerson: Word('накреняют', 6),
  masculinePast: Word('накренял', 6),
  femininePast: Word('накреняла', 6),
  neuterPast: Word('накреняло', 6),
  pluralPast: Word('накреняли', 6),
  imperativeInformal: Word('накреняй', 6),
  imperativeFormal: Word('накреняйте', 6),
  imperfect: [],
};

perfectVerbs.set(накренять.name.text, накренять);

export { накренять };