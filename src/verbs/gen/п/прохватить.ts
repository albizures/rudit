import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прохватить: PerfectVerb = {
  name: Word('прохватить', 7),
  singular1stPerson: Word('прохвачу', 7),
  singular2ndPerson: Word('прохватишь', 5),
  singular3rdPerson: Word('прохватит', 5),
  plural1stPerson: Word('прохватим', 5),
  plural2ndPerson: Word('прохватите', 5),
  plural3rdPerson: Word('прохватят', 5),
  masculinePast: Word('прохватил', 7),
  femininePast: Word('прохватила', 7),
  neuterPast: Word('прохватило', 7),
  pluralPast: Word('прохватили', 7),
  imperativeInformal: Word('прохвати', 7),
  imperativeFormal: Word('прохватите', 7),
  imperfect: [],
};

perfectVerbs.set(прохватить.name.text, прохватить);

export { прохватить };