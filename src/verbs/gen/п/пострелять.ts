import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пострелять: PerfectVerb = {
  name: Word('пострелять', 7),
  singular1stPerson: Word('постреляю', 7),
  singular2ndPerson: Word('постреляешь', 7),
  singular3rdPerson: Word('постреляет', 7),
  plural1stPerson: Word('постреляем', 7),
  plural2ndPerson: Word('постреляете', 7),
  plural3rdPerson: Word('постреляют', 7),
  masculinePast: Word('пострелял', 7),
  femininePast: Word('постреляла', 7),
  neuterPast: Word('постреляло', 7),
  pluralPast: Word('постреляли', 7),
  imperativeInformal: Word('постреляй', 7),
  imperativeFormal: Word('постреляйте', 7),
  imperfect: [],
};

perfectVerbs.set(пострелять.name.text, пострелять);

export { пострелять };