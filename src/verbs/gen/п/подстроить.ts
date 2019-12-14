import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстроить: PerfectVerb = {
  name: Word('подстроить', 6),
  singular1stPerson: Word('подстрою', 6),
  singular2ndPerson: Word('подстроишь', 6),
  singular3rdPerson: Word('подстроит', 6),
  plural1stPerson: Word('подстроим', 6),
  plural2ndPerson: Word('подстроите', 6),
  plural3rdPerson: Word('подстроят', 6),
  masculinePast: Word('подстроил', 6),
  femininePast: Word('подстроила', 6),
  neuterPast: Word('подстроило', 6),
  pluralPast: Word('подстроили', 6),
  imperativeInformal: Word('подстрой', 6),
  imperativeFormal: Word('подстройте', 6),
  imperfect: ['подстраивать'],
};

perfectVerbs.set(подстроить.name.text, подстроить);

export { подстроить };