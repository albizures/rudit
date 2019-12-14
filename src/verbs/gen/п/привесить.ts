import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привесить: PerfectVerb = {
  name: Word('привесить', 4),
  singular1stPerson: Word('привешу', 4),
  singular2ndPerson: Word('привесишь', 4),
  singular3rdPerson: Word('привесит', 4),
  plural1stPerson: Word('привесим', 4),
  plural2ndPerson: Word('привесите', 4),
  plural3rdPerson: Word('привесят', 4),
  masculinePast: Word('привесил', 4),
  femininePast: Word('привесила', 4),
  neuterPast: Word('привесило', 4),
  pluralPast: Word('привесили', 4),
  imperativeInformal: Word('привесь', 4),
  imperativeFormal: Word('привесьте', 4),
  imperfect: [],
};

perfectVerbs.set(привесить.name.text, привесить);

export { привесить };