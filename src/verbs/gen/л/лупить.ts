import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лупить: PerfectVerb = {
  name: Word('лупить', 3),
  singular1stPerson: Word('луплю', 4),
  singular2ndPerson: Word('лупишь', 1),
  singular3rdPerson: Word('лупит', 1),
  plural1stPerson: Word('лупим', 1),
  plural2ndPerson: Word('лупите', 1),
  plural3rdPerson: Word('лупят', 1),
  masculinePast: Word('лупил', 3),
  femininePast: Word('лупила', 3),
  neuterPast: Word('лупило', 3),
  pluralPast: Word('лупили', 3),
  imperativeInformal: Word('лупи', 3),
  imperativeFormal: Word('лупите', 3),
  imperfect: [],
};

perfectVerbs.set(лупить.name.text, лупить);

export { лупить };