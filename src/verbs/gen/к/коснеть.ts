import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коснеть: PerfectVerb = {
  name: Word('коснеть', 4),
  singular1stPerson: Word('коснею', 4),
  singular2ndPerson: Word('коснеешь', 4),
  singular3rdPerson: Word('коснеет', 4),
  plural1stPerson: Word('коснеем', 4),
  plural2ndPerson: Word('коснеете', 4),
  plural3rdPerson: Word('коснеют', 4),
  masculinePast: Word('коснел', 4),
  femininePast: Word('коснела', 4),
  neuterPast: Word('коснело', 4),
  pluralPast: Word('коснели', 4),
  imperativeInformal: Word('косней', 4),
  imperativeFormal: Word('коснейте', 4),
  imperfect: [],
};

perfectVerbs.set(коснеть.name.text, коснеть);

export { коснеть };