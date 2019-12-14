import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обращать: PerfectVerb = {
  name: Word('обращать', 5),
  singular1stPerson: Word('обращаю', 5),
  singular2ndPerson: Word('обращаешь', 5),
  singular3rdPerson: Word('обращает', 5),
  plural1stPerson: Word('обращаем', 5),
  plural2ndPerson: Word('обращаете', 5),
  plural3rdPerson: Word('обращают', 5),
  masculinePast: Word('обращал', 5),
  femininePast: Word('обращала', 5),
  neuterPast: Word('обращало', 5),
  pluralPast: Word('обращали', 5),
  imperativeInformal: Word('обращай', 5),
  imperativeFormal: Word('обращайте', 5),
  imperfect: ['обратить'],
};

perfectVerbs.set(обращать.name.text, обращать);

export { обращать };