import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затемнить: PerfectVerb = {
  name: Word('затемнить', 6),
  singular1stPerson: Word('затемню', 6),
  singular2ndPerson: Word('затемнишь', 6),
  singular3rdPerson: Word('затемнит', 6),
  plural1stPerson: Word('затемним', 6),
  plural2ndPerson: Word('затемните', 6),
  plural3rdPerson: Word('затемнят', 6),
  masculinePast: Word('затемнил', 6),
  femininePast: Word('затемнила', 6),
  neuterPast: Word('затемнило', 6),
  pluralPast: Word('затемнили', 6),
  imperativeInformal: Word('затемни', 6),
  imperativeFormal: Word('затемните', 6),
  imperfect: [],
};

perfectVerbs.set(затемнить.name.text, затемнить);

export { затемнить };