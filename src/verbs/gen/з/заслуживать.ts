import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслуживать: PerfectVerb = {
  name: Word('заслуживать', 4),
  singular1stPerson: Word('заслуживаю', 4),
  singular2ndPerson: Word('заслуживаешь', 4),
  singular3rdPerson: Word('заслуживает', 4),
  plural1stPerson: Word('заслуживаем', 4),
  plural2ndPerson: Word('заслуживаете', 4),
  plural3rdPerson: Word('заслуживают', 4),
  masculinePast: Word('заслуживал', 4),
  femininePast: Word('заслуживала', 4),
  neuterPast: Word('заслуживало', 4),
  pluralPast: Word('заслуживали', 4),
  imperativeInformal: Word('заслуживай', 4),
  imperativeFormal: Word('заслуживайте', 4),
  imperfect: ['заслужить'],
};

perfectVerbs.set(заслуживать.name.text, заслуживать);

export { заслуживать };