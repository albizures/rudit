import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обобществлять: PerfectVerb = {
  name: Word('обобществлять', 10),
  singular1stPerson: Word('обобществляю', 10),
  singular2ndPerson: Word('обобществляешь', 10),
  singular3rdPerson: Word('обобществляет', 10),
  plural1stPerson: Word('обобществляем', 10),
  plural2ndPerson: Word('обобществляете', 10),
  plural3rdPerson: Word('обобществляют', 10),
  masculinePast: Word('обобществлял', 10),
  femininePast: Word('обобществляла', 10),
  neuterPast: Word('обобществляло', 10),
  pluralPast: Word('обобществляли', 10),
  imperativeInformal: Word('обобществляй', 10),
  imperativeFormal: Word('обобществляйте', 10),
  imperfect: [],
};

perfectVerbs.set(обобществлять.name.text, обобществлять);

export { обобществлять };