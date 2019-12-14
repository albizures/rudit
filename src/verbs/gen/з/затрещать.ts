import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затрещать: PerfectVerb = {
  name: Word('затрещать', 6),
  singular1stPerson: Word('затрещу', 6),
  singular2ndPerson: Word('затрещишь', 6),
  singular3rdPerson: Word('затрещит', 6),
  plural1stPerson: Word('затрещим', 6),
  plural2ndPerson: Word('затрещите', 6),
  plural3rdPerson: Word('затрещат', 6),
  masculinePast: Word('затрещал', 6),
  femininePast: Word('затрещала', 6),
  neuterPast: Word('затрещало', 6),
  pluralPast: Word('затрещали', 6),
  imperativeInformal: Word('затрещи', 6),
  imperativeFormal: Word('затрещите', 6),
  imperfect: [],
};

perfectVerbs.set(затрещать.name.text, затрещать);

export { затрещать };