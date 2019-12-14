import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затоплять: PerfectVerb = {
  name: Word('затоплять', 6),
  singular1stPerson: Word('затопляю', 6),
  singular2ndPerson: Word('затопляешь', 6),
  singular3rdPerson: Word('затопляет', 6),
  plural1stPerson: Word('затопляем', 6),
  plural2ndPerson: Word('затопляете', 6),
  plural3rdPerson: Word('затопляют', 6),
  masculinePast: Word('затоплял', 6),
  femininePast: Word('затопляла', 6),
  neuterPast: Word('затопляло', 6),
  pluralPast: Word('затопляли', 6),
  imperativeInformal: Word('затопляй', 6),
  imperativeFormal: Word('затопляйте', 6),
  imperfect: [],
};

perfectVerbs.set(затоплять.name.text, затоплять);

export { затоплять };