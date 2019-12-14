import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облупить: PerfectVerb = {
  name: Word('облупить', 5),
  singular1stPerson: Word('облуплю', 6),
  singular2ndPerson: Word('облупишь', 3),
  singular3rdPerson: Word('облупит', 3),
  plural1stPerson: Word('облупим', 3),
  plural2ndPerson: Word('облупите', 3),
  plural3rdPerson: Word('облупят', 3),
  masculinePast: Word('облупил', 5),
  femininePast: Word('облупила', 5),
  neuterPast: Word('облупило', 5),
  pluralPast: Word('облупили', 5),
  imperativeInformal: Word('облупи', 5),
  imperativeFormal: Word('облупите', 5),
  imperfect: [],
};

perfectVerbs.set(облупить.name.text, облупить);

export { облупить };