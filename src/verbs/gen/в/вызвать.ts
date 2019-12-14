import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызвать: PerfectVerb = {
  name: Word('вызвать', 1),
  singular1stPerson: Word('вызову', 1),
  singular2ndPerson: Word('вызовешь', 1),
  singular3rdPerson: Word('вызовет', 1),
  plural1stPerson: Word('вызовем', 1),
  plural2ndPerson: Word('вызовете', 1),
  plural3rdPerson: Word('вызовут', 1),
  masculinePast: Word('вызвал', 1),
  femininePast: Word('вызвала', 1),
  neuterPast: Word('вызвало', 1),
  pluralPast: Word('вызвали', 1),
  imperativeInformal: Word('вызови', 1),
  imperativeFormal: Word('вызовите', 1),
  imperfect: ['вызывать'],
};

perfectVerbs.set(вызвать.name.text, вызвать);

export { вызвать };