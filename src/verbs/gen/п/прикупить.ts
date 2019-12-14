import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикупить: PerfectVerb = {
  name: Word('прикупить', 6),
  singular1stPerson: Word('прикуплю', 7),
  singular2ndPerson: Word('прикупишь', 4),
  singular3rdPerson: Word('прикупит', 4),
  plural1stPerson: Word('прикупим', 4),
  plural2ndPerson: Word('прикупите', 4),
  plural3rdPerson: Word('прикупят', 4),
  masculinePast: Word('прикупил', 6),
  femininePast: Word('прикупила', 6),
  neuterPast: Word('прикупило', 6),
  pluralPast: Word('прикупили', 6),
  imperativeInformal: Word('прикупи', 6),
  imperativeFormal: Word('прикупите', 6),
  imperfect: [],
};

perfectVerbs.set(прикупить.name.text, прикупить);

export { прикупить };