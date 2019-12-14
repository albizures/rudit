import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завилять: PerfectVerb = {
  name: Word('завилять', 5),
  singular1stPerson: Word('завиляю', 5),
  singular2ndPerson: Word('завиляешь', 5),
  singular3rdPerson: Word('завиляет', 5),
  plural1stPerson: Word('завиляем', 5),
  plural2ndPerson: Word('завиляете', 5),
  plural3rdPerson: Word('завиляют', 5),
  masculinePast: Word('завилял', 5),
  femininePast: Word('завиляла', 5),
  neuterPast: Word('завиляло', 5),
  pluralPast: Word('завиляли', 5),
  imperativeInformal: Word('завиляй', 5),
  imperativeFormal: Word('завиляйте', 5),
  imperfect: [],
};

perfectVerbs.set(завилять.name.text, завилять);

export { завилять };