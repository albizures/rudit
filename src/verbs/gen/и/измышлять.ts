import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измышлять: PerfectVerb = {
  name: Word('измышлять', 6),
  singular1stPerson: Word('измышляю', 6),
  singular2ndPerson: Word('измышляешь', 6),
  singular3rdPerson: Word('измышляет', 6),
  plural1stPerson: Word('измышляем', 6),
  plural2ndPerson: Word('измышляете', 6),
  plural3rdPerson: Word('измышляют', 6),
  masculinePast: Word('измышлял', 6),
  femininePast: Word('измышляла', 6),
  neuterPast: Word('измышляло', 6),
  pluralPast: Word('измышляли', 6),
  imperativeInformal: Word('измышляй', 6),
  imperativeFormal: Word('измышляйте', 6),
  imperfect: [],
};

perfectVerbs.set(измышлять.name.text, измышлять);

export { измышлять };