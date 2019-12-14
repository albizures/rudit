import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестрелять: PerfectVerb = {
  name: Word('перестрелять', 9),
  singular1stPerson: Word('перестреляю', 9),
  singular2ndPerson: Word('перестреляешь', 9),
  singular3rdPerson: Word('перестреляет', 9),
  plural1stPerson: Word('перестреляем', 9),
  plural2ndPerson: Word('перестреляете', 9),
  plural3rdPerson: Word('перестреляют', 9),
  masculinePast: Word('перестрелял', 9),
  femininePast: Word('перестреляла', 9),
  neuterPast: Word('перестреляло', 9),
  pluralPast: Word('перестреляли', 9),
  imperativeInformal: Word('перестреляй', 9),
  imperativeFormal: Word('перестреляйте', 9),
  imperfect: [],
};

perfectVerbs.set(перестрелять.name.text, перестрелять);

export { перестрелять };