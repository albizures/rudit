import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навесить: PerfectVerb = {
  name: Word('навесить', 3),
  singular1stPerson: Word('навешу', 3),
  singular2ndPerson: Word('навесишь', 3),
  singular3rdPerson: Word('навесит', 3),
  plural1stPerson: Word('навесим', 3),
  plural2ndPerson: Word('навесите', 3),
  plural3rdPerson: Word('навесят', 3),
  masculinePast: Word('навесил', 3),
  femininePast: Word('навесила', 3),
  neuterPast: Word('навесило', 3),
  pluralPast: Word('навесили', 3),
  imperativeInformal: Word('навесь', 3),
  imperativeFormal: Word('навесьте', 3),
  imperfect: [],
};

perfectVerbs.set(навесить.name.text, навесить);

export { навесить };