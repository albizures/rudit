import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проговорить: PerfectVerb = {
  name: Word('проговорить', 8),
  singular1stPerson: Word('проговорю', 8),
  singular2ndPerson: Word('проговоришь', 8),
  singular3rdPerson: Word('проговорит', 8),
  plural1stPerson: Word('проговорим', 8),
  plural2ndPerson: Word('проговорите', 8),
  plural3rdPerson: Word('проговорят', 8),
  masculinePast: Word('проговорил', 8),
  femininePast: Word('проговорила', 8),
  neuterPast: Word('проговорило', 8),
  pluralPast: Word('проговорили', 8),
  imperativeInformal: Word('проговори', 8),
  imperativeFormal: Word('проговорите', 8),
  imperfect: ['проговаривать'],
};

perfectVerbs.set(проговорить.name.text, проговорить);

export { проговорить };