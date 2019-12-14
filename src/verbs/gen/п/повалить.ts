import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повалить: PerfectVerb = {
  name: Word('повалить', 5),
  singular1stPerson: Word('повалю', 5),
  singular2ndPerson: Word('повалишь', 3),
  singular3rdPerson: Word('повалит', 3),
  plural1stPerson: Word('повалим', 3),
  plural2ndPerson: Word('повалите', 3),
  plural3rdPerson: Word('повалят', 3),
  masculinePast: Word('повалил', 5),
  femininePast: Word('повалила', 5),
  neuterPast: Word('повалило', 5),
  pluralPast: Word('повалили', 5),
  imperativeInformal: Word('повали', 5),
  imperativeFormal: Word('повалите', 5),
  imperfect: [],
};

perfectVerbs.set(повалить.name.text, повалить);

export { повалить };