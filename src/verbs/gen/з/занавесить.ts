import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занавесить: PerfectVerb = {
  name: Word('занавесить', 5),
  singular1stPerson: Word('занавешу', 5),
  singular2ndPerson: Word('занавесишь', 5),
  singular3rdPerson: Word('занавесит', 5),
  plural1stPerson: Word('занавесим', 5),
  plural2ndPerson: Word('занавесите', 5),
  plural3rdPerson: Word('занавесят', 5),
  masculinePast: Word('занавесил', 5),
  femininePast: Word('занавесила', 5),
  neuterPast: Word('занавесило', 5),
  pluralPast: Word('занавесили', 5),
  imperativeInformal: Word('занавесь', 5),
  imperativeFormal: Word('занавесьте', 5),
  imperfect: [],
};

perfectVerbs.set(занавесить.name.text, занавесить);

export { занавесить };