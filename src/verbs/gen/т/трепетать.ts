import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трепетать: PerfectVerb = {
  name: Word('трепетать', 6),
  singular1stPerson: Word('трепещу', 6),
  singular2ndPerson: Word('трепещешь', 4),
  singular3rdPerson: Word('трепещет', 4),
  plural1stPerson: Word('трепещем', 4),
  plural2ndPerson: Word('трепещете', 4),
  plural3rdPerson: Word('трепещут', 4),
  masculinePast: Word('трепетал', 6),
  femininePast: Word('трепетала', 6),
  neuterPast: Word('трепетало', 6),
  pluralPast: Word('трепетали', 6),
  imperativeInformal: Word('трепещи', 6),
  imperativeFormal: Word('трепещите', 6),
  imperfect: [],
};

perfectVerbs.set(трепетать.name.text, трепетать);

export { трепетать };