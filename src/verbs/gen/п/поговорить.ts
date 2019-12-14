import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поговорить: PerfectVerb = {
  name: Word('поговорить', 7),
  singular1stPerson: Word('поговорю', 7),
  singular2ndPerson: Word('поговоришь', 7),
  singular3rdPerson: Word('поговорит', 7),
  plural1stPerson: Word('поговорим', 7),
  plural2ndPerson: Word('поговорите', 7),
  plural3rdPerson: Word('поговорят', 7),
  masculinePast: Word('поговорил', 7),
  femininePast: Word('поговорила', 7),
  neuterPast: Word('поговорило', 7),
  pluralPast: Word('поговорили', 7),
  imperativeInformal: Word('поговори', 7),
  imperativeFormal: Word('поговорите', 7),
  imperfect: ['говорить'],
};

perfectVerbs.set(поговорить.name.text, поговорить);

export { поговорить };