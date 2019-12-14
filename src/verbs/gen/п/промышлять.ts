import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промышлять: PerfectVerb = {
  name: Word('промышлять', 7),
  singular1stPerson: Word('промышляю', 7),
  singular2ndPerson: Word('промышляешь', 7),
  singular3rdPerson: Word('промышляет', 7),
  plural1stPerson: Word('промышляем', 7),
  plural2ndPerson: Word('промышляете', 7),
  plural3rdPerson: Word('промышляют', 7),
  masculinePast: Word('промышлял', 7),
  femininePast: Word('промышляла', 7),
  neuterPast: Word('промышляло', 7),
  pluralPast: Word('промышляли', 7),
  imperativeInformal: Word('промышляй', 7),
  imperativeFormal: Word('промышляйте', 7),
  imperfect: [],
};

perfectVerbs.set(промышлять.name.text, промышлять);

export { промышлять };