import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвозить: PerfectVerb = {
  name: Word('подвозить', 6),
  singular1stPerson: Word('подвожу', 6),
  singular2ndPerson: Word('подвозишь', 4),
  singular3rdPerson: Word('подвозит', 4),
  plural1stPerson: Word('подвозим', 4),
  plural2ndPerson: Word('подвозите', 4),
  plural3rdPerson: Word('подвозят', 4),
  masculinePast: Word('подвозил', 6),
  femininePast: Word('подвозила', 6),
  neuterPast: Word('подвозило', 6),
  pluralPast: Word('подвозили', 6),
  imperativeInformal: Word('подвози', 6),
  imperativeFormal: Word('подвозите', 6),
  imperfect: [],
};

perfectVerbs.set(подвозить.name.text, подвозить);

export { подвозить };