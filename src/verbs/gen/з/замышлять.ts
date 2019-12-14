import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замышлять: PerfectVerb = {
  name: Word('замышлять', 6),
  singular1stPerson: Word('замышляю', 6),
  singular2ndPerson: Word('замышляешь', 6),
  singular3rdPerson: Word('замышляет', 6),
  plural1stPerson: Word('замышляем', 6),
  plural2ndPerson: Word('замышляете', 6),
  plural3rdPerson: Word('замышляют', 6),
  masculinePast: Word('замышлял', 6),
  femininePast: Word('замышляла', 6),
  neuterPast: Word('замышляло', 6),
  pluralPast: Word('замышляли', 6),
  imperativeInformal: Word('замышляй', 6),
  imperativeFormal: Word('замышляйте', 6),
  imperfect: [],
};

perfectVerbs.set(замышлять.name.text, замышлять);

export { замышлять };