import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскритиковать: PerfectVerb = {
  name: Word('раскритиковать', 11),
  singular1stPerson: Word('раскритикую', 9),
  singular2ndPerson: Word('раскритикуешь', 9),
  singular3rdPerson: Word('раскритикует', 9),
  plural1stPerson: Word('раскритикуем', 9),
  plural2ndPerson: Word('раскритикуете', 9),
  plural3rdPerson: Word('раскритикуют', 9),
  masculinePast: Word('раскритиковал', 11),
  femininePast: Word('раскритиковала', 11),
  neuterPast: Word('раскритиковало', 11),
  pluralPast: Word('раскритиковали', 11),
  imperativeInformal: Word('раскритикуй', 9),
  imperativeFormal: Word('раскритикуйте', 9),
  imperfect: [],
};

perfectVerbs.set(раскритиковать.name.text, раскритиковать);

export { раскритиковать };