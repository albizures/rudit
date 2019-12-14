import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const следить: PerfectVerb = {
  name: Word('следить', 4),
  singular1stPerson: Word('слежу', 4),
  singular2ndPerson: Word('следишь', 4),
  singular3rdPerson: Word('следит', 4),
  plural1stPerson: Word('следим', 4),
  plural2ndPerson: Word('следите', 4),
  plural3rdPerson: Word('следят', 4),
  masculinePast: Word('следил', 4),
  femininePast: Word('следила', 4),
  neuterPast: Word('следило', 4),
  pluralPast: Word('следили', 4),
  imperativeInformal: Word('следи', 4),
  imperativeFormal: Word('следите', 4),
  imperfect: ['проследить','отследить','выследить'],
};

perfectVerbs.set(следить.name.text, следить);

export { следить };