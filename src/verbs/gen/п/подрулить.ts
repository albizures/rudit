import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрулить: PerfectVerb = {
  name: Word('подрулить', 6),
  singular1stPerson: Word('подрулю', 6),
  singular2ndPerson: Word('подрулишь', 6),
  singular3rdPerson: Word('подрулит', 6),
  plural1stPerson: Word('подрулим', 6),
  plural2ndPerson: Word('подрулите', 6),
  plural3rdPerson: Word('подрулят', 6),
  masculinePast: Word('подрулил', 6),
  femininePast: Word('подрулила', 6),
  neuterPast: Word('подрулило', 6),
  pluralPast: Word('подрулили', 6),
  imperativeInformal: Word('подрули', 6),
  imperativeFormal: Word('подрулите', 6),
  imperfect: [],
};

perfectVerbs.set(подрулить.name.text, подрулить);

export { подрулить };