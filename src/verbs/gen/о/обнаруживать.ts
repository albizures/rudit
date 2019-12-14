import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнаруживать: PerfectVerb = {
  name: Word('обнаруживать', 5),
  singular1stPerson: Word('обнаруживаю', 5),
  singular2ndPerson: Word('обнаруживаешь', 5),
  singular3rdPerson: Word('обнаруживает', 5),
  plural1stPerson: Word('обнаруживаем', 5),
  plural2ndPerson: Word('обнаруживаете', 5),
  plural3rdPerson: Word('обнаруживают', 5),
  masculinePast: Word('обнаруживал', 5),
  femininePast: Word('обнаруживала', 5),
  neuterPast: Word('обнаруживало', 5),
  pluralPast: Word('обнаруживали', 5),
  imperativeInformal: Word('обнаруживай', 5),
  imperativeFormal: Word('обнаруживайте', 5),
  imperfect: ['обнаружить'],
};

perfectVerbs.set(обнаруживать.name.text, обнаруживать);

export { обнаруживать };