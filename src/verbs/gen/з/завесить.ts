import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завесить: PerfectVerb = {
  name: Word('завесить', 3),
  singular1stPerson: Word('завешу', 3),
  singular2ndPerson: Word('завесишь', 3),
  singular3rdPerson: Word('завесит', 3),
  plural1stPerson: Word('завесим', 3),
  plural2ndPerson: Word('завесите', 3),
  plural3rdPerson: Word('завесят', 3),
  masculinePast: Word('завесил', 3),
  femininePast: Word('завесила', 3),
  neuterPast: Word('завесило', 3),
  pluralPast: Word('завесили', 3),
  imperativeInformal: Word('завесь', 3),
  imperativeFormal: Word('завесьте', 3),
  imperfect: [],
};

perfectVerbs.set(завесить.name.text, завесить);

export { завесить };