import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const называть: PerfectVerb = {
  name: Word('называть', 5),
  singular1stPerson: Word('называю', 5),
  singular2ndPerson: Word('называешь', 5),
  singular3rdPerson: Word('называет', 5),
  plural1stPerson: Word('называем', 5),
  plural2ndPerson: Word('называете', 5),
  plural3rdPerson: Word('называют', 5),
  masculinePast: Word('называл', 5),
  femininePast: Word('называла', 5),
  neuterPast: Word('называло', 5),
  pluralPast: Word('называли', 5),
  imperativeInformal: Word('называй', 5),
  imperativeFormal: Word('называйте', 5),
  imperfect: ['назвать'],
};

perfectVerbs.set(называть.name.text, называть);

export { называть };