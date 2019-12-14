import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подновлять: PerfectVerb = {
  name: Word('подновлять', 7),
  singular1stPerson: Word('подновляю', 7),
  singular2ndPerson: Word('подновляешь', 7),
  singular3rdPerson: Word('подновляет', 7),
  plural1stPerson: Word('подновляем', 7),
  plural2ndPerson: Word('подновляете', 7),
  plural3rdPerson: Word('подновляют', 7),
  masculinePast: Word('подновлял', 7),
  femininePast: Word('подновляла', 7),
  neuterPast: Word('подновляло', 7),
  pluralPast: Word('подновляли', 7),
  imperativeInformal: Word('подновляй', 7),
  imperativeFormal: Word('подновляйте', 7),
  imperfect: [],
};

perfectVerbs.set(подновлять.name.text, подновлять);

export { подновлять };