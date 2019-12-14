import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const урезонить: PerfectVerb = {
  name: Word('урезонить', 4),
  singular1stPerson: Word('урезоню', 4),
  singular2ndPerson: Word('урезонишь', 4),
  singular3rdPerson: Word('урезонит', 4),
  plural1stPerson: Word('урезоним', 4),
  plural2ndPerson: Word('урезоните', 4),
  plural3rdPerson: Word('урезонят', 4),
  masculinePast: Word('урезонил', 4),
  femininePast: Word('урезонила', 4),
  neuterPast: Word('урезонило', 4),
  pluralPast: Word('урезонили', 4),
  imperativeInformal: Word('урезонь', 4),
  imperativeFormal: Word('урезоньте', 4),
  imperfect: [],
};

perfectVerbs.set(урезонить.name.text, урезонить);

export { урезонить };