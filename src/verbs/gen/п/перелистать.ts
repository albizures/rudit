import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелистать: PerfectVerb = {
  name: Word('перелистать', 8),
  singular1stPerson: Word('перелистаю', 8),
  singular2ndPerson: Word('перелистаешь', 8),
  singular3rdPerson: Word('перелистает', 8),
  plural1stPerson: Word('перелистаем', 8),
  plural2ndPerson: Word('перелистаете', 8),
  plural3rdPerson: Word('перелистают', 8),
  masculinePast: Word('перелистал', 8),
  femininePast: Word('перелистала', 8),
  neuterPast: Word('перелистало', 8),
  pluralPast: Word('перелистали', 8),
  imperativeInformal: Word('перелистай', 8),
  imperativeFormal: Word('перелистайте', 8),
  imperfect: [],
};

perfectVerbs.set(перелистать.name.text, перелистать);

export { перелистать };