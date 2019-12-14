import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослаблять: PerfectVerb = {
  name: Word('ослаблять', 6),
  singular1stPerson: Word('ослабляю', 6),
  singular2ndPerson: Word('ослабляешь', 6),
  singular3rdPerson: Word('ослабляет', 6),
  plural1stPerson: Word('ослабляем', 6),
  plural2ndPerson: Word('ослабляете', 6),
  plural3rdPerson: Word('ослабляют', 6),
  masculinePast: Word('ослаблял', 6),
  femininePast: Word('ослабляла', 6),
  neuterPast: Word('ослабляло', 6),
  pluralPast: Word('ослабляли', 6),
  imperativeInformal: Word('ослабляй', 6),
  imperativeFormal: Word('ослабляйте', 6),
  imperfect: ['ослабить'],
};

perfectVerbs.set(ослаблять.name.text, ослаблять);

export { ослаблять };