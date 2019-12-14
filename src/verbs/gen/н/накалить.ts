import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накалить: PerfectVerb = {
  name: Word('накалить', 5),
  singular1stPerson: Word('накалю', 5),
  singular2ndPerson: Word('накалишь', 5),
  singular3rdPerson: Word('накалит', 5),
  plural1stPerson: Word('накалим', 5),
  plural2ndPerson: Word('накалите', 5),
  plural3rdPerson: Word('накалят', 5),
  masculinePast: Word('накалил', 5),
  femininePast: Word('накалила', 5),
  neuterPast: Word('накалило', 5),
  pluralPast: Word('накалили', 5),
  imperativeInformal: Word('накали', 5),
  imperativeFormal: Word('накалите', 5),
  imperfect: [],
};

perfectVerbs.set(накалить.name.text, накалить);

export { накалить };