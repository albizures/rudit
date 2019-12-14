import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колесить: PerfectVerb = {
  name: Word('колесить', 5),
  singular1stPerson: Word('колешу', 5),
  singular2ndPerson: Word('колесишь', 5),
  singular3rdPerson: Word('колесит', 5),
  plural1stPerson: Word('колесим', 5),
  plural2ndPerson: Word('колесите', 5),
  plural3rdPerson: Word('колесят', 5),
  masculinePast: Word('колесил', 5),
  femininePast: Word('колесила', 5),
  neuterPast: Word('колесило', 5),
  pluralPast: Word('колесили', 5),
  imperativeInformal: Word('колеси', 5),
  imperativeFormal: Word('колесите', 5),
  imperfect: [],
};

perfectVerbs.set(колесить.name.text, колесить);

export { колесить };