import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчёсывать: PerfectVerb = {
  name: Word('расчёсывать', 4),
  singular1stPerson: Word('расчёсываю', 4),
  singular2ndPerson: Word('расчёсываешь', 4),
  singular3rdPerson: Word('расчёсывает', 4),
  plural1stPerson: Word('расчёсываем', 4),
  plural2ndPerson: Word('расчёсываете', 4),
  plural3rdPerson: Word('расчёсывают', 4),
  masculinePast: Word('расчёсывал', 4),
  femininePast: Word('расчёсывала', 4),
  neuterPast: Word('расчёсывало', 4),
  pluralPast: Word('расчёсывали', 4),
  imperativeInformal: Word('расчёсывай', 4),
  imperativeFormal: Word('расчёсывайте', 4),
  imperfect: [],
};

perfectVerbs.set(расчёсывать.name.text, расчёсывать);

export { расчёсывать };