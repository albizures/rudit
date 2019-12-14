import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрещать: PerfectVerb = {
  name: Word('потрещать', 6),
  singular1stPerson: Word('потрещу', 6),
  singular2ndPerson: Word('потрещишь', 6),
  singular3rdPerson: Word('потрещит', 6),
  plural1stPerson: Word('потрещим', 6),
  plural2ndPerson: Word('потрещите', 6),
  plural3rdPerson: Word('потрещат', 6),
  masculinePast: Word('потрещал', 6),
  femininePast: Word('потрещала', 6),
  neuterPast: Word('потрещало', 6),
  pluralPast: Word('потрещали', 6),
  imperativeInformal: Word('потрещи', 6),
  imperativeFormal: Word('потрещите', 6),
  imperfect: [],
};

perfectVerbs.set(потрещать.name.text, потрещать);

export { потрещать };