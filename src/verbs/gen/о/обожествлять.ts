import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обожествлять: PerfectVerb = {
  name: Word('обожествлять', 9),
  singular1stPerson: Word('обожествляю', 9),
  singular2ndPerson: Word('обожествляешь', 9),
  singular3rdPerson: Word('обожествляет', 9),
  plural1stPerson: Word('обожествляем', 9),
  plural2ndPerson: Word('обожествляете', 9),
  plural3rdPerson: Word('обожествляют', 9),
  masculinePast: Word('обожествлял', 9),
  femininePast: Word('обожествляла', 9),
  neuterPast: Word('обожествляло', 9),
  pluralPast: Word('обожествляли', 9),
  imperativeInformal: Word('обожествляй', 9),
  imperativeFormal: Word('обожествляйте', 9),
  imperfect: [],
};

perfectVerbs.set(обожествлять.name.text, обожествлять);

export { обожествлять };