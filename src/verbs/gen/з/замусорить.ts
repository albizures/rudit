import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замусорить: PerfectVerb = {
  name: Word('замусорить', 3),
  singular1stPerson: Word('замусорю', 3),
  singular2ndPerson: Word('замусоришь', 3),
  singular3rdPerson: Word('замусорит', 3),
  plural1stPerson: Word('замусорим', 3),
  plural2ndPerson: Word('замусорите', 3),
  plural3rdPerson: Word('замусорят', 3),
  masculinePast: Word('замусорил', 3),
  femininePast: Word('замусорила', 3),
  neuterPast: Word('замусорило', 3),
  pluralPast: Word('замусорили', 3),
  imperativeInformal: Word('замусори//заму'сорь', 3),
  imperativeFormal: Word('замусорьте', 3),
  imperfect: [],
};

perfectVerbs.set(замусорить.name.text, замусорить);

export { замусорить };