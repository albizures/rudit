import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причислять: PerfectVerb = {
  name: Word('причислять', 7),
  singular1stPerson: Word('причисляю', 7),
  singular2ndPerson: Word('причисляешь', 7),
  singular3rdPerson: Word('причисляет', 7),
  plural1stPerson: Word('причисляем', 7),
  plural2ndPerson: Word('причисляете', 7),
  plural3rdPerson: Word('причисляют', 7),
  masculinePast: Word('причислял', 7),
  femininePast: Word('причисляла', 7),
  neuterPast: Word('причисляло', 7),
  pluralPast: Word('причисляли', 7),
  imperativeInformal: Word('причисляй', 7),
  imperativeFormal: Word('причисляйте', 7),
  imperfect: [],
};

perfectVerbs.set(причислять.name.text, причислять);

export { причислять };