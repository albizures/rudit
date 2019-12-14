import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пружинить: PerfectVerb = {
  name: Word('пружинить', 4),
  singular1stPerson: Word('пружиню', 4),
  singular2ndPerson: Word('пружинишь', 4),
  singular3rdPerson: Word('пружинит', 4),
  plural1stPerson: Word('пружиним', 4),
  plural2ndPerson: Word('пружините', 4),
  plural3rdPerson: Word('пружинят', 4),
  masculinePast: Word('пружинил', 4),
  femininePast: Word('пружинила', 4),
  neuterPast: Word('пружинило', 4),
  pluralPast: Word('пружинили', 4),
  imperativeInformal: Word('пружинь', 4),
  imperativeFormal: Word('пружиньте', 4),
  imperfect: [],
};

perfectVerbs.set(пружинить.name.text, пружинить);

export { пружинить };