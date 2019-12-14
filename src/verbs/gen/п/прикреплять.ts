import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикреплять: PerfectVerb = {
  name: Word('прикреплять', 8),
  singular1stPerson: Word('прикрепляю', 8),
  singular2ndPerson: Word('прикрепляешь', 8),
  singular3rdPerson: Word('прикрепляет', 8),
  plural1stPerson: Word('прикрепляем', 8),
  plural2ndPerson: Word('прикрепляете', 8),
  plural3rdPerson: Word('прикрепляют', 8),
  masculinePast: Word('прикреплял', 8),
  femininePast: Word('прикрепляла', 8),
  neuterPast: Word('прикрепляло', 8),
  pluralPast: Word('прикрепляли', 8),
  imperativeInformal: Word('прикрепляй', 8),
  imperativeFormal: Word('прикрепляйте', 8),
  imperfect: ['прикрепить'],
};

perfectVerbs.set(прикреплять.name.text, прикреплять);

export { прикреплять };