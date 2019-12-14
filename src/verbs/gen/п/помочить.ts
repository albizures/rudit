import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помочить: PerfectVerb = {
  name: Word('помочить', 5),
  singular1stPerson: Word('помочу', 5),
  singular2ndPerson: Word('помочишь', 3),
  singular3rdPerson: Word('помочит', 3),
  plural1stPerson: Word('помочим', 3),
  plural2ndPerson: Word('помочите', 3),
  plural3rdPerson: Word('помочат', 3),
  masculinePast: Word('помочил', 5),
  femininePast: Word('помочила', 5),
  neuterPast: Word('помочило', 5),
  pluralPast: Word('помочили', 5),
  imperativeInformal: Word('помочи', 5),
  imperativeFormal: Word('помочите', 5),
  imperfect: [],
};

perfectVerbs.set(помочить.name.text, помочить);

export { помочить };