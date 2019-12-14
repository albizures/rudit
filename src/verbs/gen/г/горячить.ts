import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const горячить: PerfectVerb = {
  name: Word('горячить', 5),
  singular1stPerson: Word('горячу', 5),
  singular2ndPerson: Word('горячишь', 5),
  singular3rdPerson: Word('горячит', 5),
  plural1stPerson: Word('горячим', 5),
  plural2ndPerson: Word('горячите', 5),
  plural3rdPerson: Word('горячат', 5),
  masculinePast: Word('горячил', 5),
  femininePast: Word('горячила', 5),
  neuterPast: Word('горячило', 5),
  pluralPast: Word('горячили', 5),
  imperativeInformal: Word('горячи', 5),
  imperativeFormal: Word('горячите', 5),
  imperfect: [],
};

perfectVerbs.set(горячить.name.text, горячить);

export { горячить };