import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const атаковать: PerfectVerb = {
  name: Word('атаковать', 6),
  singular1stPerson: Word('атакую', 4),
  singular2ndPerson: Word('атакуешь', 4),
  singular3rdPerson: Word('атакует', 4),
  plural1stPerson: Word('атакуем', 4),
  plural2ndPerson: Word('атакуете', 4),
  plural3rdPerson: Word('атакуют', 4),
  masculinePast: Word('атаковал', 6),
  femininePast: Word('атаковала', 6),
  neuterPast: Word('атаковало', 6),
  pluralPast: Word('атаковали', 6),
  imperativeInformal: Word('атакуй', 4),
  imperativeFormal: Word('атакуйте', 4),
  imperfect: [],
};

perfectVerbs.set(атаковать.name.text, атаковать);

export { атаковать };