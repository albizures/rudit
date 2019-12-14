import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проспорить: PerfectVerb = {
  name: Word('проспорить', 5),
  singular1stPerson: Word('проспорю', 5),
  singular2ndPerson: Word('проспоришь', 5),
  singular3rdPerson: Word('проспорит', 5),
  plural1stPerson: Word('проспорим', 5),
  plural2ndPerson: Word('проспорите', 5),
  plural3rdPerson: Word('проспорят', 5),
  masculinePast: Word('проспорил', 5),
  femininePast: Word('проспорила', 5),
  neuterPast: Word('проспорило', 5),
  pluralPast: Word('проспорили', 5),
  imperativeInformal: Word('проспорь', 5),
  imperativeFormal: Word('проспорьте', 5),
  imperfect: [],
};

perfectVerbs.set(проспорить.name.text, проспорить);

export { проспорить };