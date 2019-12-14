import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притупить: PerfectVerb = {
  name: Word('притупить', 6),
  singular1stPerson: Word('притуплю', 7),
  singular2ndPerson: Word('притупишь', 4),
  singular3rdPerson: Word('притупит', 4),
  plural1stPerson: Word('притупим', 4),
  plural2ndPerson: Word('притупите', 4),
  plural3rdPerson: Word('притупят', 4),
  masculinePast: Word('притупил', 6),
  femininePast: Word('притупила', 6),
  neuterPast: Word('притупило', 6),
  pluralPast: Word('притупили', 6),
  imperativeInformal: Word('притупи', 6),
  imperativeFormal: Word('притупите', 6),
  imperfect: [],
};

perfectVerbs.set(притупить.name.text, притупить);

export { притупить };