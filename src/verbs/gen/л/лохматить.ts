import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лохматить: PerfectVerb = {
  name: Word('лохматить', 4),
  singular1stPerson: Word('лохмачу', 4),
  singular2ndPerson: Word('лохматишь', 4),
  singular3rdPerson: Word('лохматит', 4),
  plural1stPerson: Word('лохматим', 4),
  plural2ndPerson: Word('лохматите', 4),
  plural3rdPerson: Word('лохматят', 4),
  masculinePast: Word('лохматил', 4),
  femininePast: Word('лохматила', 4),
  neuterPast: Word('лохматило', 4),
  pluralPast: Word('лохматили', 4),
  imperativeInformal: Word('лохмать', 4),
  imperativeFormal: Word('лохматьте', 4),
  imperfect: [],
};

perfectVerbs.set(лохматить.name.text, лохматить);

export { лохматить };