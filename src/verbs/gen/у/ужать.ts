import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужать: PerfectVerb = {
  name: Word('ужать', 2),
  singular1stPerson: Word('ужму', 3),
  singular2ndPerson: Word('ужмёшь', 0),
  singular3rdPerson: Word('ужмёт', 0),
  plural1stPerson: Word('ужмём', 0),
  plural2ndPerson: Word('ужмёте', 5),
  plural3rdPerson: Word('ужмут', 3),
  masculinePast: Word('ужал', 2),
  femininePast: Word('ужала', 2),
  neuterPast: Word('ужало', 2),
  pluralPast: Word('ужали', 2),
  imperativeInformal: Word('ужми', 3),
  imperativeFormal: Word('ужмите', 3),
  imperfect: [],
};

perfectVerbs.set(ужать.name.text, ужать);

export { ужать };