import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тупить: PerfectVerb = {
  name: Word('тупить', 3),
  singular1stPerson: Word('туплю', 4),
  singular2ndPerson: Word('тупишь', 1),
  singular3rdPerson: Word('тупит', 1),
  plural1stPerson: Word('тупим', 1),
  plural2ndPerson: Word('тупите', 1),
  plural3rdPerson: Word('тупят', 1),
  masculinePast: Word('тупил', 3),
  femininePast: Word('тупила', 3),
  neuterPast: Word('тупило', 3),
  pluralPast: Word('тупили', 3),
  imperativeInformal: Word('тупи', 3),
  imperativeFormal: Word('тупите', 3),
  imperfect: [],
};

perfectVerbs.set(тупить.name.text, тупить);

export { тупить };