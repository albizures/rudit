import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристрелять: PerfectVerb = {
  name: Word('пристрелять', 8),
  singular1stPerson: Word('пристреляю', 8),
  singular2ndPerson: Word('пристреляешь', 8),
  singular3rdPerson: Word('пристреляет', 8),
  plural1stPerson: Word('пристреляем', 8),
  plural2ndPerson: Word('пристреляете', 8),
  plural3rdPerson: Word('пристреляют', 8),
  masculinePast: Word('пристрелял', 8),
  femininePast: Word('пристреляла', 8),
  neuterPast: Word('пристреляло', 8),
  pluralPast: Word('пристреляли', 8),
  imperativeInformal: Word('пристреляй', 8),
  imperativeFormal: Word('пристреляйте', 8),
  imperfect: [],
};

perfectVerbs.set(пристрелять.name.text, пристрелять);

export { пристрелять };