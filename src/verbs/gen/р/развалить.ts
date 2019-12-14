import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развалить: PerfectVerb = {
  name: Word('развалить', 6),
  singular1stPerson: Word('развалю', 6),
  singular2ndPerson: Word('развалишь', 4),
  singular3rdPerson: Word('развалит', 4),
  plural1stPerson: Word('развалим', 4),
  plural2ndPerson: Word('развалите', 4),
  plural3rdPerson: Word('развалят', 4),
  masculinePast: Word('развалил', 6),
  femininePast: Word('развалила', 6),
  neuterPast: Word('развалило', 6),
  pluralPast: Word('развалили', 6),
  imperativeInformal: Word('развали', 6),
  imperativeFormal: Word('развалите', 6),
  imperfect: [],
};

perfectVerbs.set(развалить.name.text, развалить);

export { развалить };