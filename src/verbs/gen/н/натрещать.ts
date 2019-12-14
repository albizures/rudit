import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натрещать: PerfectVerb = {
  name: Word('натрещать', 6),
  singular1stPerson: Word('натрещу', 6),
  singular2ndPerson: Word('натрещишь', 6),
  singular3rdPerson: Word('натрещит', 6),
  plural1stPerson: Word('натрещим', 6),
  plural2ndPerson: Word('натрещите', 6),
  plural3rdPerson: Word('натрещат', 6),
  masculinePast: Word('натрещал', 6),
  femininePast: Word('натрещала', 6),
  neuterPast: Word('натрещало', 6),
  pluralPast: Word('натрещали', 6),
  imperativeInformal: Word('натрещи', 6),
  imperativeFormal: Word('натрещите', 6),
  imperfect: [],
};

perfectVerbs.set(натрещать.name.text, натрещать);

export { натрещать };