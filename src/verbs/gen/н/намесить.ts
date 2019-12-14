import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намесить: PerfectVerb = {
  name: Word('намесить', 5),
  singular1stPerson: Word('намешу', 5),
  singular2ndPerson: Word('намесишь', 3),
  singular3rdPerson: Word('намесит', 3),
  plural1stPerson: Word('намесим', 3),
  plural2ndPerson: Word('намесите', 3),
  plural3rdPerson: Word('намесят', 3),
  masculinePast: Word('намесил', 5),
  femininePast: Word('намесила', 5),
  neuterPast: Word('намесило', 5),
  pluralPast: Word('намесили', 5),
  imperativeInformal: Word('намеси', 5),
  imperativeFormal: Word('намесите', 5),
  imperfect: [],
};

perfectVerbs.set(намесить.name.text, намесить);

export { намесить };