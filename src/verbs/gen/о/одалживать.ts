import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одалживать: PerfectVerb = {
  name: Word('одалживать', 2),
  singular1stPerson: Word('одалживаю', 2),
  singular2ndPerson: Word('одалживаешь', 2),
  singular3rdPerson: Word('одалживает', 2),
  plural1stPerson: Word('одалживаем', 2),
  plural2ndPerson: Word('одалживаете', 2),
  plural3rdPerson: Word('одалживают', 2),
  masculinePast: Word('одалживал', 2),
  femininePast: Word('одалживала', 2),
  neuterPast: Word('одалживало', 2),
  pluralPast: Word('одалживали', 2),
  imperativeInformal: Word('одалживай', 2),
  imperativeFormal: Word('одалживайте', 2),
  imperfect: ['одолжить'],
};

perfectVerbs.set(одалживать.name.text, одалживать);

export { одалживать };