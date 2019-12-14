import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пулять: PerfectVerb = {
  name: Word('пулять', 3),
  singular1stPerson: Word('пуляю', 3),
  singular2ndPerson: Word('пуляешь', 3),
  singular3rdPerson: Word('пуляет', 3),
  plural1stPerson: Word('пуляем', 3),
  plural2ndPerson: Word('пуляете', 3),
  plural3rdPerson: Word('пуляют', 3),
  masculinePast: Word('пулял', 3),
  femininePast: Word('пуляла', 3),
  neuterPast: Word('пуляло', 3),
  pluralPast: Word('пуляли', 3),
  imperativeInformal: Word('пуляй', 3),
  imperativeFormal: Word('пуляйте', 3),
  imperfect: [],
};

perfectVerbs.set(пулять.name.text, пулять);

export { пулять };