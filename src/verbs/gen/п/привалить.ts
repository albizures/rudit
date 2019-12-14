import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привалить: PerfectVerb = {
  name: Word('привалить', 6),
  singular1stPerson: Word('привалю', 6),
  singular2ndPerson: Word('привалишь', 4),
  singular3rdPerson: Word('привалит', 4),
  plural1stPerson: Word('привалим', 4),
  plural2ndPerson: Word('привалите', 4),
  plural3rdPerson: Word('привалят', 4),
  masculinePast: Word('привалил', 6),
  femininePast: Word('привалила', 6),
  neuterPast: Word('привалило', 6),
  pluralPast: Word('привалили', 6),
  imperativeInformal: Word('привали', 6),
  imperativeFormal: Word('привалите', 6),
  imperfect: [],
};

perfectVerbs.set(привалить.name.text, привалить);

export { привалить };