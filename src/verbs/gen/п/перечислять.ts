import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечислять: PerfectVerb = {
  name: Word('перечислять', 8),
  singular1stPerson: Word('перечисляю', 8),
  singular2ndPerson: Word('перечисляешь', 8),
  singular3rdPerson: Word('перечисляет', 8),
  plural1stPerson: Word('перечисляем', 8),
  plural2ndPerson: Word('перечисляете', 8),
  plural3rdPerson: Word('перечисляют', 8),
  masculinePast: Word('перечислял', 8),
  femininePast: Word('перечисляла', 8),
  neuterPast: Word('перечисляло', 8),
  pluralPast: Word('перечисляли', 8),
  imperativeInformal: Word('перечисляй', 8),
  imperativeFormal: Word('перечисляйте', 8),
  imperfect: [],
};

perfectVerbs.set(перечислять.name.text, перечислять);

export { перечислять };