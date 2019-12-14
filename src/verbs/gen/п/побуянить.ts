import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побуянить: PerfectVerb = {
  name: Word('побуянить', 4),
  singular1stPerson: Word('побуяню', 4),
  singular2ndPerson: Word('побуянишь', 4),
  singular3rdPerson: Word('побуянит', 4),
  plural1stPerson: Word('побуяним', 4),
  plural2ndPerson: Word('побуяните', 4),
  plural3rdPerson: Word('побуянят', 4),
  masculinePast: Word('побуянил', 4),
  femininePast: Word('побуянила', 4),
  neuterPast: Word('побуянило', 4),
  pluralPast: Word('побуянили', 4),
  imperativeInformal: Word('побуянь', 4),
  imperativeFormal: Word('побуяньте', 4),
  imperfect: [],
};

perfectVerbs.set(побуянить.name.text, побуянить);

export { побуянить };