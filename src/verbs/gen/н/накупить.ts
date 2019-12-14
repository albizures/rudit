import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накупить: PerfectVerb = {
  name: Word('накупить', 5),
  singular1stPerson: Word('накуплю', 6),
  singular2ndPerson: Word('накупишь', 3),
  singular3rdPerson: Word('накупит', 3),
  plural1stPerson: Word('накупим', 3),
  plural2ndPerson: Word('накупите', 3),
  plural3rdPerson: Word('накупят', 3),
  masculinePast: Word('накупил', 5),
  femininePast: Word('накупила', 5),
  neuterPast: Word('накупило', 5),
  pluralPast: Word('накупили', 5),
  imperativeInformal: Word('накупи', 5),
  imperativeFormal: Word('накупите', 5),
  imperfect: [],
};

perfectVerbs.set(накупить.name.text, накупить);

export { накупить };