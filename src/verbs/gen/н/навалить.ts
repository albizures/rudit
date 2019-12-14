import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навалить: PerfectVerb = {
  name: Word('навалить', 5),
  singular1stPerson: Word('навалю', 5),
  singular2ndPerson: Word('навалишь', 3),
  singular3rdPerson: Word('навалит', 3),
  plural1stPerson: Word('навалим', 3),
  plural2ndPerson: Word('навалите', 3),
  plural3rdPerson: Word('навалят', 3),
  masculinePast: Word('навалил', 5),
  femininePast: Word('навалила', 5),
  neuterPast: Word('навалило', 5),
  pluralPast: Word('навалили', 5),
  imperativeInformal: Word('навали', 5),
  imperativeFormal: Word('навалите', 5),
  imperfect: [],
};

perfectVerbs.set(навалить.name.text, навалить);

export { навалить };