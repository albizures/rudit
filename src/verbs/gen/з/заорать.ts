import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заорать: PerfectVerb = {
  name: Word('заорать', 4),
  singular1stPerson: Word('заору', 4),
  singular2ndPerson: Word('заорёшь', 1),
  singular3rdPerson: Word('заорёт', 1),
  plural1stPerson: Word('заорём', 1),
  plural2ndPerson: Word('заорёте', 1),
  plural3rdPerson: Word('заорут', 4),
  masculinePast: Word('заорал', 4),
  femininePast: Word('заорала', 4),
  neuterPast: Word('заорало', 4),
  pluralPast: Word('заорали', 4),
  imperativeInformal: Word('заори', 4),
  imperativeFormal: Word('заорите', 4),
  imperfect: [],
};

perfectVerbs.set(заорать.name.text, заорать);

export { заорать };