import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const игнорировать: PerfectVerb = {
  name: Word('игнорировать', 5),
  singular1stPerson: Word('игнорирую', 5),
  singular2ndPerson: Word('игнорируешь', 5),
  singular3rdPerson: Word('игнорирует', 5),
  plural1stPerson: Word('игнорируем', 5),
  plural2ndPerson: Word('игнорируете', 5),
  plural3rdPerson: Word('игнорируют', 5),
  masculinePast: Word('игнорировал', 5),
  femininePast: Word('игнорировала', 5),
  neuterPast: Word('игнорировало', 5),
  pluralPast: Word('игнорировали', 5),
  imperativeInformal: Word('игнорируй', 5),
  imperativeFormal: Word('игнорируйте', 5),
  imperfect: ['проигнорировать'],
};

perfectVerbs.set(игнорировать.name.text, игнорировать);

export { игнорировать };