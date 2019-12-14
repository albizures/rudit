import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проворонить: PerfectVerb = {
  name: Word('проворонить', 6),
  singular1stPerson: Word('провороню', 6),
  singular2ndPerson: Word('проворонишь', 6),
  singular3rdPerson: Word('проворонит', 6),
  plural1stPerson: Word('провороним', 6),
  plural2ndPerson: Word('провороните', 6),
  plural3rdPerson: Word('проворонят', 6),
  masculinePast: Word('проворонил', 6),
  femininePast: Word('проворонила', 6),
  neuterPast: Word('проворонило', 6),
  pluralPast: Word('проворонили', 6),
  imperativeInformal: Word('проворонь', 6),
  imperativeFormal: Word('провороньте', 6),
  imperfect: [],
};

perfectVerbs.set(проворонить.name.text, проворонить);

export { проворонить };