import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчёсывать: PerfectVerb = {
  name: Word('расчёсывать', 1),
  singular1stPerson: Word('расчёсываю', 1),
  singular2ndPerson: Word('расчёсываешь', 1),
  singular3rdPerson: Word('расчёсывает', 1),
  plural1stPerson: Word('расчёсываем', 1),
  plural2ndPerson: Word('расчёсываете', 1),
  plural3rdPerson: Word('расчёсывают', 1),
  masculinePast: Word('расчёсывал', 1),
  femininePast: Word('расчёсывала', 1),
  neuterPast: Word('расчёсывало', 1),
  pluralPast: Word('расчёсывали', 1),
  imperativeInformal: Word('расчёсывай', 1),
  imperativeFormal: Word('расчёсывайте', 1),
  imperfect: [],
};

perfectVerbs.set(расчёсывать.name.text, расчёсывать);

export { расчёсывать };