import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размышлять: PerfectVerb = {
  name: Word('размышлять', 7),
  singular1stPerson: Word('размышляю', 7),
  singular2ndPerson: Word('размышляешь', 7),
  singular3rdPerson: Word('размышляет', 7),
  plural1stPerson: Word('размышляем', 7),
  plural2ndPerson: Word('размышляете', 7),
  plural3rdPerson: Word('размышляют', 7),
  masculinePast: Word('размышлял', 7),
  femininePast: Word('размышляла', 7),
  neuterPast: Word('размышляло', 7),
  pluralPast: Word('размышляли', 7),
  imperativeInformal: Word('размышляй', 7),
  imperativeFormal: Word('размышляйте', 7),
  imperfect: [],
};

perfectVerbs.set(размышлять.name.text, размышлять);

export { размышлять };