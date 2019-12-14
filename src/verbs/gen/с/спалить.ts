import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спалить: PerfectVerb = {
  name: Word('спалить', 4),
  singular1stPerson: Word('спалю', 4),
  singular2ndPerson: Word('спалишь', 4),
  singular3rdPerson: Word('спалит', 4),
  plural1stPerson: Word('спалим', 4),
  plural2ndPerson: Word('спалите', 4),
  plural3rdPerson: Word('спалят', 4),
  masculinePast: Word('спалил', 4),
  femininePast: Word('спалила', 4),
  neuterPast: Word('спалило', 4),
  pluralPast: Word('спалили', 4),
  imperativeInformal: Word('спали', 4),
  imperativeFormal: Word('спалите', 4),
  imperfect: [],
};

perfectVerbs.set(спалить.name.text, спалить);

export { спалить };