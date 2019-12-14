import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смочить: PerfectVerb = {
  name: Word('смочить', 4),
  singular1stPerson: Word('смочу', 4),
  singular2ndPerson: Word('смочишь', 2),
  singular3rdPerson: Word('смочит', 2),
  plural1stPerson: Word('смочим', 2),
  plural2ndPerson: Word('смочите', 2),
  plural3rdPerson: Word('смочат', 2),
  masculinePast: Word('смочил', 4),
  femininePast: Word('смочила', 4),
  neuterPast: Word('смочило', 4),
  pluralPast: Word('смочили', 4),
  imperativeInformal: Word('смочи', 4),
  imperativeFormal: Word('смочите', 4),
  imperfect: [],
};

perfectVerbs.set(смочить.name.text, смочить);

export { смочить };