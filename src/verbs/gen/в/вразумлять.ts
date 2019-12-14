import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вразумлять: PerfectVerb = {
  name: Word('вразумлять', 7),
  singular1stPerson: Word('вразумляю', 7),
  singular2ndPerson: Word('вразумляешь', 7),
  singular3rdPerson: Word('вразумляет', 7),
  plural1stPerson: Word('вразумляем', 7),
  plural2ndPerson: Word('вразумляете', 7),
  plural3rdPerson: Word('вразумляют', 7),
  masculinePast: Word('вразумлял', 7),
  femininePast: Word('вразумляла', 7),
  neuterPast: Word('вразумляло', 7),
  pluralPast: Word('вразумляли', 7),
  imperativeInformal: Word('вразумляй', 7),
  imperativeFormal: Word('вразумляйте', 7),
  imperfect: [],
};

perfectVerbs.set(вразумлять.name.text, вразумлять);

export { вразумлять };