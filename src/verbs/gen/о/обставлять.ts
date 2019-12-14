import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обставлять: PerfectVerb = {
  name: Word('обставлять', 7),
  singular1stPerson: Word('обставляю', 7),
  singular2ndPerson: Word('обставляешь', 7),
  singular3rdPerson: Word('обставляет', 7),
  plural1stPerson: Word('обставляем', 7),
  plural2ndPerson: Word('обставляете', 7),
  plural3rdPerson: Word('обставляют', 7),
  masculinePast: Word('обставлял', 7),
  femininePast: Word('обставляла', 7),
  neuterPast: Word('обставляло', 7),
  pluralPast: Word('обставляли', 7),
  imperativeInformal: Word('обставляй', 7),
  imperativeFormal: Word('обставляйте', 7),
  imperfect: [],
};

perfectVerbs.set(обставлять.name.text, обставлять);

export { обставлять };