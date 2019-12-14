import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кашлять: PerfectVerb = {
  name: Word('кашлять', 1),
  singular1stPerson: Word('кашляю', 1),
  singular2ndPerson: Word('кашляешь', 1),
  singular3rdPerson: Word('кашляет', 1),
  plural1stPerson: Word('кашляем', 1),
  plural2ndPerson: Word('кашляете', 1),
  plural3rdPerson: Word('кашляют', 1),
  masculinePast: Word('кашлял', 1),
  femininePast: Word('кашляла', 1),
  neuterPast: Word('кашляло', 1),
  pluralPast: Word('кашляли', 1),
  imperativeInformal: Word('кашляй', 1),
  imperativeFormal: Word('кашляйте', 1),
  imperfect: ['кашлянуть'],
};

perfectVerbs.set(кашлять.name.text, кашлять);

export { кашлять };