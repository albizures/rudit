import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const контратаковать: PerfectVerb = {
  name: Word('контратаковать', 11),
  singular1stPerson: Word('контратакую', 9),
  singular2ndPerson: Word('контратакуешь', 9),
  singular3rdPerson: Word('контратакует', 9),
  plural1stPerson: Word('контратакуем', 9),
  plural2ndPerson: Word('контратакуете', 9),
  plural3rdPerson: Word('контратакуют', 9),
  masculinePast: Word('контратаковал', 11),
  femininePast: Word('контратаковала', 11),
  neuterPast: Word('контратаковало', 11),
  pluralPast: Word('контратаковали', 11),
  imperativeInformal: Word('контратакуй', 9),
  imperativeFormal: Word('контратакуйте', 9),
  imperfect: [],
};

perfectVerbs.set(контратаковать.name.text, контратаковать);

export { контратаковать };