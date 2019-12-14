import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмыслять: PerfectVerb = {
  name: Word('осмыслять', 6),
  singular1stPerson: Word('осмысляю', 6),
  singular2ndPerson: Word('осмысляешь', 6),
  singular3rdPerson: Word('осмысляет', 6),
  plural1stPerson: Word('осмысляем', 6),
  plural2ndPerson: Word('осмысляете', 6),
  plural3rdPerson: Word('осмысляют', 6),
  masculinePast: Word('осмыслял', 6),
  femininePast: Word('осмысляла', 6),
  neuterPast: Word('осмысляло', 6),
  pluralPast: Word('осмысляли', 6),
  imperativeInformal: Word('осмысляй', 6),
  imperativeFormal: Word('осмысляйте', 6),
  imperfect: [],
};

perfectVerbs.set(осмыслять.name.text, осмыслять);

export { осмыслять };