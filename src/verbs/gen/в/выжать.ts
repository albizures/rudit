import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выжать: PerfectVerb = {
  name: Word('выжать', 1),
  singular1stPerson: Word('выжму', 1),
  singular2ndPerson: Word('выжмешь', 1),
  singular3rdPerson: Word('выжмет', 1),
  plural1stPerson: Word('выжмем', 1),
  plural2ndPerson: Word('выжмете', 1),
  plural3rdPerson: Word('выжмут', 1),
  masculinePast: Word('выжал', 1),
  femininePast: Word('выжала', 1),
  neuterPast: Word('выжало', 1),
  pluralPast: Word('выжали', 1),
  imperativeInformal: Word('выжми', 1),
  imperativeFormal: Word('выжмите', 1),
  imperfect: ['выжимать'],
};

perfectVerbs.set(выжать.name.text, выжать);

export { выжать };