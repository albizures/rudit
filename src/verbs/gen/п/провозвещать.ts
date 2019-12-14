import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провозвещать: PerfectVerb = {
  name: Word('провозвещать', 9),
  singular1stPerson: Word('провозвещаю', 9),
  singular2ndPerson: Word('провозвещаешь', 9),
  singular3rdPerson: Word('провозвещает', 9),
  plural1stPerson: Word('провозвещаем', 9),
  plural2ndPerson: Word('провозвещаете', 9),
  plural3rdPerson: Word('провозвещают', 9),
  masculinePast: Word('провозвещал', 9),
  femininePast: Word('провозвещала', 9),
  neuterPast: Word('провозвещало', 9),
  pluralPast: Word('провозвещали', 9),
  imperativeInformal: Word('провозвещай', 9),
  imperativeFormal: Word('провозвещайте', 9),
  imperfect: [],
};

perfectVerbs.set(провозвещать.name.text, провозвещать);

export { провозвещать };