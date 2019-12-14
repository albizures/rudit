import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заживать: PerfectVerb = {
  name: Word('заживать', 5),
  singular1stPerson: Word('заживаю', 5),
  singular2ndPerson: Word('заживаешь', 5),
  singular3rdPerson: Word('заживает', 5),
  plural1stPerson: Word('заживаем', 5),
  plural2ndPerson: Word('заживаете', 5),
  plural3rdPerson: Word('заживают', 5),
  masculinePast: Word('заживал', 5),
  femininePast: Word('заживала', 5),
  neuterPast: Word('заживало', 5),
  pluralPast: Word('заживали', 5),
  imperativeInformal: Word('заживай', 5),
  imperativeFormal: Word('заживайте', 5),
  imperfect: ['зажить'],
};

perfectVerbs.set(заживать.name.text, заживать);

export { заживать };