import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умышлять: PerfectVerb = {
  name: Word('умышлять', 5),
  singular1stPerson: Word('умышляю', 5),
  singular2ndPerson: Word('умышляешь', 5),
  singular3rdPerson: Word('умышляет', 5),
  plural1stPerson: Word('умышляем', 5),
  plural2ndPerson: Word('умышляете', 5),
  plural3rdPerson: Word('умышляют', 5),
  masculinePast: Word('умышлял', 5),
  femininePast: Word('умышляла', 5),
  neuterPast: Word('умышляло', 5),
  pluralPast: Word('умышляли', 5),
  imperativeInformal: Word('умышляй', 5),
  imperativeFormal: Word('умышляйте', 5),
  imperfect: [],
};

perfectVerbs.set(умышлять.name.text, умышлять);

export { умышлять };