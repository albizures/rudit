import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстригать: PerfectVerb = {
  name: Word('расстригать', 8),
  singular1stPerson: Word('расстригаю', 8),
  singular2ndPerson: Word('расстригаешь', 8),
  singular3rdPerson: Word('расстригает', 8),
  plural1stPerson: Word('расстригаем', 8),
  plural2ndPerson: Word('расстригаете', 8),
  plural3rdPerson: Word('расстригают', 8),
  masculinePast: Word('расстригал', 8),
  femininePast: Word('расстригала', 8),
  neuterPast: Word('расстригало', 8),
  pluralPast: Word('расстригали', 8),
  imperativeInformal: Word('расстригай', 8),
  imperativeFormal: Word('расстригайте', 8),
  imperfect: [],
};

perfectVerbs.set(расстригать.name.text, расстригать);

export { расстригать };