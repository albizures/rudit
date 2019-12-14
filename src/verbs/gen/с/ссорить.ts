import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссорить: PerfectVerb = {
  name: Word('ссорить', 2),
  singular1stPerson: Word('ссорю', 2),
  singular2ndPerson: Word('ссоришь', 2),
  singular3rdPerson: Word('ссорит', 2),
  plural1stPerson: Word('ссорим', 2),
  plural2ndPerson: Word('ссорите', 2),
  plural3rdPerson: Word('ссорят', 2),
  masculinePast: Word('ссорил', 2),
  femininePast: Word('ссорила', 2),
  neuterPast: Word('ссорило', 2),
  pluralPast: Word('ссорили', 2),
  imperativeInformal: Word('ссорь', 2),
  imperativeFormal: Word('ссорьте', 2),
  imperfect: [],
};

perfectVerbs.set(ссорить.name.text, ссорить);

export { ссорить };