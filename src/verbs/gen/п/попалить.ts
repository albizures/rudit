import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попалить: PerfectVerb = {
  name: Word('попалить', 5),
  singular1stPerson: Word('попалю', 5),
  singular2ndPerson: Word('попалишь', 5),
  singular3rdPerson: Word('попалит', 5),
  plural1stPerson: Word('попалим', 5),
  plural2ndPerson: Word('попалите', 5),
  plural3rdPerson: Word('попалят', 5),
  masculinePast: Word('попалил', 5),
  femininePast: Word('попалила', 5),
  neuterPast: Word('попалило', 5),
  pluralPast: Word('попалили', 5),
  imperativeInformal: Word('попали', 5),
  imperativeFormal: Word('попалите', 5),
  imperfect: [],
};

perfectVerbs.set(попалить.name.text, попалить);

export { попалить };