import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчухать: PerfectVerb = {
  name: Word('расчухать', 4),
  singular1stPerson: Word('расчухаю', 4),
  singular2ndPerson: Word('расчухаешь', 4),
  singular3rdPerson: Word('расчухает', 4),
  plural1stPerson: Word('расчухаем', 4),
  plural2ndPerson: Word('расчухаете', 4),
  plural3rdPerson: Word('расчухают', 4),
  masculinePast: Word('расчухал', 4),
  femininePast: Word('расчухала', 4),
  neuterPast: Word('расчухало', 4),
  pluralPast: Word('расчухали', 4),
  imperativeInformal: Word('расчухай', 4),
  imperativeFormal: Word('расчухайте', 4),
  imperfect: [],
};

perfectVerbs.set(расчухать.name.text, расчухать);

export { расчухать };