import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расценить: PerfectVerb = {
  name: Word('расценить', 6),
  singular1stPerson: Word('расценю', 6),
  singular2ndPerson: Word('расценишь', 4),
  singular3rdPerson: Word('расценит', 4),
  plural1stPerson: Word('расценим', 4),
  plural2ndPerson: Word('расцените', 4),
  plural3rdPerson: Word('расценят', 4),
  masculinePast: Word('расценил', 6),
  femininePast: Word('расценила', 6),
  neuterPast: Word('расценило', 6),
  pluralPast: Word('расценили', 6),
  imperativeInformal: Word('расцени', 6),
  imperativeFormal: Word('расцените', 6),
  imperfect: [],
};

perfectVerbs.set(расценить.name.text, расценить);

export { расценить };