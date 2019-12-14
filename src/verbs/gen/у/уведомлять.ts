import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уведомлять: PerfectVerb = {
  name: Word('уведомлять', 7),
  singular1stPerson: Word('уведомляю', 7),
  singular2ndPerson: Word('уведомляешь', 7),
  singular3rdPerson: Word('уведомляет', 7),
  plural1stPerson: Word('уведомляем', 7),
  plural2ndPerson: Word('уведомляете', 7),
  plural3rdPerson: Word('уведомляют', 7),
  masculinePast: Word('уведомлял', 7),
  femininePast: Word('уведомляла', 7),
  neuterPast: Word('уведомляло', 7),
  pluralPast: Word('уведомляли', 7),
  imperativeInformal: Word('уведомляй', 7),
  imperativeFormal: Word('уведомляйте', 7),
  imperfect: ['уведомить'],
};

perfectVerbs.set(уведомлять.name.text, уведомлять);

export { уведомлять };