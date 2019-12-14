import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const показать: PerfectVerb = {
  name: Word('показать', 5),
  singular1stPerson: Word('покажу', 5),
  singular2ndPerson: Word('покажешь', 3),
  singular3rdPerson: Word('покажет', 3),
  plural1stPerson: Word('покажем', 3),
  plural2ndPerson: Word('покажете', 3),
  plural3rdPerson: Word('покажут', 3),
  masculinePast: Word('показал', 5),
  femininePast: Word('показала', 5),
  neuterPast: Word('показало', 5),
  pluralPast: Word('показали', 5),
  imperativeInformal: Word('покажи', 5),
  imperativeFormal: Word('покажите', 5),
  imperfect: ['показывать'],
};

perfectVerbs.set(показать.name.text, показать);

export { показать };