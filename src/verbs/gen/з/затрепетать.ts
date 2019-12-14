import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затрепетать: PerfectVerb = {
  name: Word('затрепетать', 8),
  singular1stPerson: Word('затрепещу', 8),
  singular2ndPerson: Word('затрепещешь', 6),
  singular3rdPerson: Word('затрепещет', 6),
  plural1stPerson: Word('затрепещем', 6),
  plural2ndPerson: Word('затрепещете', 6),
  plural3rdPerson: Word('затрепещут', 6),
  masculinePast: Word('затрепетал', 8),
  femininePast: Word('затрепетала', 8),
  neuterPast: Word('затрепетало', 8),
  pluralPast: Word('затрепетали', 8),
  imperativeInformal: Word('затрепещи', 8),
  imperativeFormal: Word('затрепещите', 8),
  imperfect: [],
};

perfectVerbs.set(затрепетать.name.text, затрепетать);

export { затрепетать };