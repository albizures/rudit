import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помыслить: PerfectVerb = {
  name: Word('помыслить', 3),
  singular1stPerson: Word('помыслю', 3),
  singular2ndPerson: Word('помыслишь', 3),
  singular3rdPerson: Word('помыслит', 3),
  plural1stPerson: Word('помыслим', 3),
  plural2ndPerson: Word('помыслите', 3),
  plural3rdPerson: Word('помыслят', 3),
  masculinePast: Word('помыслил', 3),
  femininePast: Word('помыслила', 3),
  neuterPast: Word('помыслило', 3),
  pluralPast: Word('помыслили', 3),
  imperativeInformal: Word('помысли', 3),
  imperativeFormal: Word('помыслите', 3),
  imperfect: [],
};

perfectVerbs.set(помыслить.name.text, помыслить);

export { помыслить };