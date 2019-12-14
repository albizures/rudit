import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвалить: PerfectVerb = {
  name: Word('обвалить', 5),
  singular1stPerson: Word('обвалю', 5),
  singular2ndPerson: Word('обвалишь', 3),
  singular3rdPerson: Word('обвалит', 3),
  plural1stPerson: Word('обвалим', 3),
  plural2ndPerson: Word('обвалите', 3),
  plural3rdPerson: Word('обвалят', 3),
  masculinePast: Word('обвалил', 5),
  femininePast: Word('обвалила', 5),
  neuterPast: Word('обвалило', 5),
  pluralPast: Word('обвалили', 5),
  imperativeInformal: Word('обвали', 5),
  imperativeFormal: Word('обвалите', 5),
  imperfect: [],
};

perfectVerbs.set(обвалить.name.text, обвалить);

export { обвалить };