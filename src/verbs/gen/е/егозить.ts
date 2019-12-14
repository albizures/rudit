import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const егозить: PerfectVerb = {
  name: Word('егозить', 4),
  singular1stPerson: Word('егожу', 4),
  singular2ndPerson: Word('егозишь', 4),
  singular3rdPerson: Word('егозит', 4),
  plural1stPerson: Word('егозим', 4),
  plural2ndPerson: Word('егозите', 4),
  plural3rdPerson: Word('егозят', 4),
  masculinePast: Word('егозил', 4),
  femininePast: Word('егозила', 4),
  neuterPast: Word('егозило', 4),
  pluralPast: Word('егозили', 4),
  imperativeInformal: Word('егози', 4),
  imperativeFormal: Word('егозите', 4),
  imperfect: [],
};

perfectVerbs.set(егозить.name.text, егозить);

export { егозить };