import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сцеплять: PerfectVerb = {
  name: Word('сцеплять', 5),
  singular1stPerson: Word('сцепляю', 5),
  singular2ndPerson: Word('сцепляешь', 5),
  singular3rdPerson: Word('сцепляет', 5),
  plural1stPerson: Word('сцепляем', 5),
  plural2ndPerson: Word('сцепляете', 5),
  plural3rdPerson: Word('сцепляют', 5),
  masculinePast: Word('сцеплял', 5),
  femininePast: Word('сцепляла', 5),
  neuterPast: Word('сцепляло', 5),
  pluralPast: Word('сцепляли', 5),
  imperativeInformal: Word('сцепляй', 5),
  imperativeFormal: Word('сцепляйте', 5),
  imperfect: [],
};

perfectVerbs.set(сцеплять.name.text, сцеплять);

export { сцеплять };