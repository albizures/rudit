import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмочить: PerfectVerb = {
  name: Word('обмочить', 5),
  singular1stPerson: Word('обмочу', 5),
  singular2ndPerson: Word('обмочишь', 3),
  singular3rdPerson: Word('обмочит', 3),
  plural1stPerson: Word('обмочим', 3),
  plural2ndPerson: Word('обмочите', 3),
  plural3rdPerson: Word('обмочат', 3),
  masculinePast: Word('обмочил', 5),
  femininePast: Word('обмочила', 5),
  neuterPast: Word('обмочило', 5),
  pluralPast: Word('обмочили', 5),
  imperativeInformal: Word('обмочи', 5),
  imperativeFormal: Word('обмочите', 5),
  imperfect: [],
};

perfectVerbs.set(обмочить.name.text, обмочить);

export { обмочить };