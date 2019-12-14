import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сорить: PerfectVerb = {
  name: Word('сорить', 3),
  singular1stPerson: Word('сорю', 3),
  singular2ndPerson: Word('соришь', 3),
  singular3rdPerson: Word('сорит', 3),
  plural1stPerson: Word('сорим', 3),
  plural2ndPerson: Word('сорите', 3),
  plural3rdPerson: Word('сорят', 3),
  masculinePast: Word('сорил', 3),
  femininePast: Word('сорила', 3),
  neuterPast: Word('сорило', 3),
  pluralPast: Word('сорили', 3),
  imperativeInformal: Word('сори', 3),
  imperativeFormal: Word('сорите', 3),
  imperfect: [],
};

perfectVerbs.set(сорить.name.text, сорить);

export { сорить };