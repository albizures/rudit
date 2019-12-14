import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнимать: PerfectVerb = {
  name: Word('обнимать', 5),
  singular1stPerson: Word('обнимаю', 5),
  singular2ndPerson: Word('обнимаешь', 5),
  singular3rdPerson: Word('обнимает', 5),
  plural1stPerson: Word('обнимаем', 5),
  plural2ndPerson: Word('обнимаете', 5),
  plural3rdPerson: Word('обнимают', 5),
  masculinePast: Word('обнимал', 5),
  femininePast: Word('обнимала', 5),
  neuterPast: Word('обнимало', 5),
  pluralPast: Word('обнимали', 5),
  imperativeInformal: Word('обнимай', 5),
  imperativeFormal: Word('обнимайте', 5),
  imperfect: ['обнять'],
};

perfectVerbs.set(обнимать.name.text, обнимать);

export { обнимать };