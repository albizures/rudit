import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибавлять: PerfectVerb = {
  name: Word('прибавлять', 7),
  singular1stPerson: Word('прибавляю', 7),
  singular2ndPerson: Word('прибавляешь', 7),
  singular3rdPerson: Word('прибавляет', 7),
  plural1stPerson: Word('прибавляем', 7),
  plural2ndPerson: Word('прибавляете', 7),
  plural3rdPerson: Word('прибавляют', 7),
  masculinePast: Word('прибавлял', 7),
  femininePast: Word('прибавляла', 7),
  neuterPast: Word('прибавляло', 7),
  pluralPast: Word('прибавляли', 7),
  imperativeInformal: Word('прибавляй', 7),
  imperativeFormal: Word('прибавляйте', 7),
  imperfect: ['прибавить'],
};

perfectVerbs.set(прибавлять.name.text, прибавлять);

export { прибавлять };