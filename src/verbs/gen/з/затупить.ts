import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затупить: PerfectVerb = {
  name: Word('затупить', 5),
  singular1stPerson: Word('затуплю', 6),
  singular2ndPerson: Word('затупишь', 3),
  singular3rdPerson: Word('затупит', 3),
  plural1stPerson: Word('затупим', 3),
  plural2ndPerson: Word('затупите', 3),
  plural3rdPerson: Word('затупят', 3),
  masculinePast: Word('затупил', 5),
  femininePast: Word('затупила', 5),
  neuterPast: Word('затупило', 5),
  pluralPast: Word('затупили', 5),
  imperativeInformal: Word('затупи', 5),
  imperativeFormal: Word('затупите', 5),
  imperfect: [],
};

perfectVerbs.set(затупить.name.text, затупить);

export { затупить };