import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оспорить: PerfectVerb = {
  name: Word('оспорить', 3),
  singular1stPerson: Word('оспорю', 3),
  singular2ndPerson: Word('оспоришь', 3),
  singular3rdPerson: Word('оспорит', 3),
  plural1stPerson: Word('оспорим', 3),
  plural2ndPerson: Word('оспорите', 3),
  plural3rdPerson: Word('оспорят', 3),
  masculinePast: Word('оспорил', 3),
  femininePast: Word('оспорила', 3),
  neuterPast: Word('оспорило', 3),
  pluralPast: Word('оспорили', 3),
  imperativeInformal: Word('оспорь', 3),
  imperativeFormal: Word('оспорьте', 3),
  imperfect: [],
};

perfectVerbs.set(оспорить.name.text, оспорить);

export { оспорить };