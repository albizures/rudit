import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окупить: PerfectVerb = {
  name: Word('окупить', 4),
  singular1stPerson: Word('окуплю', 5),
  singular2ndPerson: Word('окупишь', 2),
  singular3rdPerson: Word('окупит', 2),
  plural1stPerson: Word('окупим', 2),
  plural2ndPerson: Word('окупите', 2),
  plural3rdPerson: Word('окупят', 2),
  masculinePast: Word('окупил', 4),
  femininePast: Word('окупила', 4),
  neuterPast: Word('окупило', 4),
  pluralPast: Word('окупили', 4),
  imperativeInformal: Word('окупи', 4),
  imperativeFormal: Word('окупите', 4),
  imperfect: [],
};

perfectVerbs.set(окупить.name.text, окупить);

export { окупить };