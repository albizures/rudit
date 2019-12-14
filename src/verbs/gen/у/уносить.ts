import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уносить: PerfectVerb = {
  name: Word('уносить', 4),
  singular1stPerson: Word('уношу', 4),
  singular2ndPerson: Word('уносишь', 2),
  singular3rdPerson: Word('уносит', 2),
  plural1stPerson: Word('уносим', 2),
  plural2ndPerson: Word('уносите', 2),
  plural3rdPerson: Word('уносят', 2),
  masculinePast: Word('уносил', 4),
  femininePast: Word('уносила', 4),
  neuterPast: Word('уносило', 4),
  pluralPast: Word('уносили', 4),
  imperativeInformal: Word('уноси', 4),
  imperativeFormal: Word('уносите', 4),
  imperfect: ['унести'],
};

perfectVerbs.set(уносить.name.text, уносить);

export { уносить };