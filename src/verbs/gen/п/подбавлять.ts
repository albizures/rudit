import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбавлять: PerfectVerb = {
  name: Word('подбавлять', 7),
  singular1stPerson: Word('подбавляю', 7),
  singular2ndPerson: Word('подбавляешь', 7),
  singular3rdPerson: Word('подбавляет', 7),
  plural1stPerson: Word('подбавляем', 7),
  plural2ndPerson: Word('подбавляете', 7),
  plural3rdPerson: Word('подбавляют', 7),
  masculinePast: Word('подбавлял', 7),
  femininePast: Word('подбавляла', 7),
  neuterPast: Word('подбавляло', 7),
  pluralPast: Word('подбавляли', 7),
  imperativeInformal: Word('подбавляй', 7),
  imperativeFormal: Word('подбавляйте', 7),
  imperfect: [],
};

perfectVerbs.set(подбавлять.name.text, подбавлять);

export { подбавлять };