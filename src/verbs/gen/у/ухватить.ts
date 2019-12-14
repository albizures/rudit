import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухватить: PerfectVerb = {
  name: Word('ухватить', 5),
  singular1stPerson: Word('ухвачу', 5),
  singular2ndPerson: Word('ухватишь', 3),
  singular3rdPerson: Word('ухватит', 3),
  plural1stPerson: Word('ухватим', 3),
  plural2ndPerson: Word('ухватите', 3),
  plural3rdPerson: Word('ухватят', 3),
  masculinePast: Word('ухватил', 5),
  femininePast: Word('ухватила', 5),
  neuterPast: Word('ухватило', 5),
  pluralPast: Word('ухватили', 5),
  imperativeInformal: Word('ухвати', 5),
  imperativeFormal: Word('ухватите', 5),
  imperfect: [],
};

perfectVerbs.set(ухватить.name.text, ухватить);

export { ухватить };