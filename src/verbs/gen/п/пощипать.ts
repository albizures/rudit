import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пощипать: PerfectVerb = {
  name: Word('пощипать', 5),
  singular1stPerson: Word('пощиплю', 6),
  singular2ndPerson: Word('пощиплешь', 3),
  singular3rdPerson: Word('пощиплет', 3),
  plural1stPerson: Word('пощиплем', 3),
  plural2ndPerson: Word('пощиплете', 3),
  plural3rdPerson: Word('пощиплют', 3),
  masculinePast: Word('пощипал', 5),
  femininePast: Word('пощипала', 5),
  neuterPast: Word('пощипало', 5),
  pluralPast: Word('пощипали', 5),
  imperativeInformal: Word('пощипли', 6),
  imperativeFormal: Word('пощиплите', 6),
  imperfect: [],
};

perfectVerbs.set(пощипать.name.text, пощипать);

export { пощипать };