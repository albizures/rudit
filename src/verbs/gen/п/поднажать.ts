import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поднажать: PerfectVerb = {
  name: Word('поднажать', 6),
  singular1stPerson: Word('поднажму', 7),
  singular2ndPerson: Word('поднажмёшь', 7),
  singular3rdPerson: Word('поднажмёт', 7),
  plural1stPerson: Word('поднажмём', 7),
  plural2ndPerson: Word('поднажмёте', 7),
  plural3rdPerson: Word('поднажмут', 7),
  masculinePast: Word('поднажал', 6),
  femininePast: Word('поднажала', 6),
  neuterPast: Word('поднажало', 6),
  pluralPast: Word('поднажали', 6),
  imperativeInformal: Word('поднажми', 7),
  imperativeFormal: Word('поднажмите', 7),
  imperfect: [],
};

perfectVerbs.set(поднажать.name.text, поднажать);

export { поднажать };