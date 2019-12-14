import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исколесить: PerfectVerb = {
  name: Word('исколесить', 7),
  singular1stPerson: Word('исколешу', 7),
  singular2ndPerson: Word('исколесишь', 7),
  singular3rdPerson: Word('исколесит', 7),
  plural1stPerson: Word('исколесим', 7),
  plural2ndPerson: Word('исколесите', 7),
  plural3rdPerson: Word('исколесят', 7),
  masculinePast: Word('исколесил', 7),
  femininePast: Word('исколесила', 7),
  neuterPast: Word('исколесило', 7),
  pluralPast: Word('исколесили', 7),
  imperativeInformal: Word('исколеси', 7),
  imperativeFormal: Word('исколесите', 7),
  imperfect: [],
};

perfectVerbs.set(исколесить.name.text, исколесить);

export { исколесить };