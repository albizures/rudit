import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const означать: PerfectVerb = {
  name: Word('означать', 5),
  singular1stPerson: Word('означаю', 5),
  singular2ndPerson: Word('означаешь', 5),
  singular3rdPerson: Word('означает', 5),
  plural1stPerson: Word('означаем', 5),
  plural2ndPerson: Word('означаете', 5),
  plural3rdPerson: Word('означают', 5),
  masculinePast: Word('означал', 5),
  femininePast: Word('означала', 5),
  neuterPast: Word('означало', 5),
  pluralPast: Word('означали', 5),
  imperativeInformal: Word('означай', 5),
  imperativeFormal: Word('означайте', 5),
  imperfect: ['означить'],
};

perfectVerbs.set(означать.name.text, означать);

export { означать };