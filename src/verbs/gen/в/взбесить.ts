import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбесить: PerfectVerb = {
  name: Word('взбесить', 5),
  singular1stPerson: Word('взбешу', 5),
  singular2ndPerson: Word('взбесишь', 3),
  singular3rdPerson: Word('взбесит', 3),
  plural1stPerson: Word('взбесим', 3),
  plural2ndPerson: Word('взбесите', 3),
  plural3rdPerson: Word('взбесят', 3),
  masculinePast: Word('взбесил', 5),
  femininePast: Word('взбесила', 5),
  neuterPast: Word('взбесило', 5),
  pluralPast: Word('взбесили', 5),
  imperativeInformal: Word('взбеси', 5),
  imperativeFormal: Word('взбесите', 5),
  imperfect: [],
};

perfectVerbs.set(взбесить.name.text, взбесить);

export { взбесить };