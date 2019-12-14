import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const договорить: PerfectVerb = {
  name: Word('договорить', 7),
  singular1stPerson: Word('договорю', 7),
  singular2ndPerson: Word('договоришь', 7),
  singular3rdPerson: Word('договорит', 7),
  plural1stPerson: Word('договорим', 7),
  plural2ndPerson: Word('договорите', 7),
  plural3rdPerson: Word('договорят', 7),
  masculinePast: Word('договорил', 7),
  femininePast: Word('договорила', 7),
  neuterPast: Word('договорило', 7),
  pluralPast: Word('договорили', 7),
  imperativeInformal: Word('договори', 7),
  imperativeFormal: Word('договорите', 7),
  imperfect: [],
};

perfectVerbs.set(договорить.name.text, договорить);

export { договорить };