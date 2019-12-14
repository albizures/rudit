import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распалить: PerfectVerb = {
  name: Word('распалить', 6),
  singular1stPerson: Word('распалю', 6),
  singular2ndPerson: Word('распалишь', 6),
  singular3rdPerson: Word('распалит', 6),
  plural1stPerson: Word('распалим', 6),
  plural2ndPerson: Word('распалите', 6),
  plural3rdPerson: Word('распалят', 6),
  masculinePast: Word('распалил', 6),
  femininePast: Word('распалила', 6),
  neuterPast: Word('распалило', 6),
  pluralPast: Word('распалили', 6),
  imperativeInformal: Word('распали', 6),
  imperativeFormal: Word('распалите', 6),
  imperfect: [],
};

perfectVerbs.set(распалить.name.text, распалить);

export { распалить };