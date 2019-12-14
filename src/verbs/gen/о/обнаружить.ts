import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнаружить: PerfectVerb = {
  name: Word('обнаружить', 5),
  singular1stPerson: Word('обнаружу', 5),
  singular2ndPerson: Word('обнаружишь', 5),
  singular3rdPerson: Word('обнаружит', 5),
  plural1stPerson: Word('обнаружим', 5),
  plural2ndPerson: Word('обнаружите', 5),
  plural3rdPerson: Word('обнаружат', 5),
  masculinePast: Word('обнаружил', 5),
  femininePast: Word('обнаружила', 5),
  neuterPast: Word('обнаружило', 5),
  pluralPast: Word('обнаружили', 5),
  imperativeInformal: Word('обнаружь', 5),
  imperativeFormal: Word('обнаружьте', 5),
  imperfect: ['обнаруживать'],
};

perfectVerbs.set(обнаружить.name.text, обнаружить);

export { обнаружить };