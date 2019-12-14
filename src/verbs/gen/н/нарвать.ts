import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарвать: PerfectVerb = {
  name: Word('нарвать', 4),
  singular1stPerson: Word('нарву', 4),
  singular2ndPerson: Word('нарвёшь', 1),
  singular3rdPerson: Word('нарвёт', 1),
  plural1stPerson: Word('нарвём', 1),
  plural2ndPerson: Word('нарвёте', 1),
  plural3rdPerson: Word('нарвут', 4),
  masculinePast: Word('нарвал', 4),
  femininePast: Word('нарвала', 6),
  neuterPast: Word('нарвало', 4),
  pluralPast: Word('нарвали', 4),
  imperativeInformal: Word('нарви', 4),
  imperativeFormal: Word('нарвите', 4),
  imperfect: [],
};

perfectVerbs.set(нарвать.name.text, нарвать);

export { нарвать };