import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const произносить: PerfectVerb = {
  name: Word('произносить', 8),
  singular1stPerson: Word('произношу', 8),
  singular2ndPerson: Word('произносишь', 6),
  singular3rdPerson: Word('произносит', 6),
  plural1stPerson: Word('произносим', 6),
  plural2ndPerson: Word('произносите', 6),
  plural3rdPerson: Word('произносят', 6),
  masculinePast: Word('произносил', 8),
  femininePast: Word('произносила', 8),
  neuterPast: Word('произносило', 8),
  pluralPast: Word('произносили', 8),
  imperativeInformal: Word('произноси', 8),
  imperativeFormal: Word('произносите', 8),
  imperfect: ['произнести'],
};

perfectVerbs.set(произносить.name.text, произносить);

export { произносить };