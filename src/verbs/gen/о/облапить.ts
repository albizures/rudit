import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облапить: PerfectVerb = {
  name: Word('облапить', 3),
  singular1stPerson: Word('облаплю', 3),
  singular2ndPerson: Word('облапишь', 3),
  singular3rdPerson: Word('облапит', 3),
  plural1stPerson: Word('облапим', 3),
  plural2ndPerson: Word('облапите', 3),
  plural3rdPerson: Word('облапят', 3),
  masculinePast: Word('облапил', 3),
  femininePast: Word('облапила', 3),
  neuterPast: Word('облапило', 3),
  pluralPast: Word('облапили', 3),
  imperativeInformal: Word('облапь', 3),
  imperativeFormal: Word('облапьте', 3),
  imperfect: [],
};

perfectVerbs.set(облапить.name.text, облапить);

export { облапить };