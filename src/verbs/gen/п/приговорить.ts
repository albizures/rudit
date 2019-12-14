import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приговорить: PerfectVerb = {
  name: Word('приговорить', 8),
  singular1stPerson: Word('приговорю', 8),
  singular2ndPerson: Word('приговоришь', 8),
  singular3rdPerson: Word('приговорит', 8),
  plural1stPerson: Word('приговорим', 8),
  plural2ndPerson: Word('приговорите', 8),
  plural3rdPerson: Word('приговорят', 8),
  masculinePast: Word('приговорил', 8),
  femininePast: Word('приговорила', 8),
  neuterPast: Word('приговорило', 8),
  pluralPast: Word('приговорили', 8),
  imperativeInformal: Word('приговори', 8),
  imperativeFormal: Word('приговорите', 8),
  imperfect: ['приговаривать'],
};

perfectVerbs.set(приговорить.name.text, приговорить);

export { приговорить };