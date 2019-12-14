import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикурить: PerfectVerb = {
  name: Word('прикурить', 6),
  singular1stPerson: Word('прикурю', 6),
  singular2ndPerson: Word('прикуришь', 4),
  singular3rdPerson: Word('прикурит', 4),
  plural1stPerson: Word('прикурим', 4),
  plural2ndPerson: Word('прикурите', 4),
  plural3rdPerson: Word('прикурят', 4),
  masculinePast: Word('прикурил', 6),
  femininePast: Word('прикурила', 6),
  neuterPast: Word('прикурило', 6),
  pluralPast: Word('прикурили', 6),
  imperativeInformal: Word('прикури', 6),
  imperativeFormal: Word('прикурите', 6),
  imperfect: [],
};

perfectVerbs.set(прикурить.name.text, прикурить);

export { прикурить };