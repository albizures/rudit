import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчищать: PerfectVerb = {
  name: Word('расчищать', 6),
  singular1stPerson: Word('расчищаю', 6),
  singular2ndPerson: Word('расчищаешь', 6),
  singular3rdPerson: Word('расчищает', 6),
  plural1stPerson: Word('расчищаем', 6),
  plural2ndPerson: Word('расчищаете', 6),
  plural3rdPerson: Word('расчищают', 6),
  masculinePast: Word('расчищал', 6),
  femininePast: Word('расчищала', 6),
  neuterPast: Word('расчищало', 6),
  pluralPast: Word('расчищали', 6),
  imperativeInformal: Word('расчищай', 6),
  imperativeFormal: Word('расчищайте', 6),
  imperfect: [],
};

perfectVerbs.set(расчищать.name.text, расчищать);

export { расчищать };