import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задерживать: PerfectVerb = {
  name: Word('задерживать', 3),
  singular1stPerson: Word('задерживаю', 3),
  singular2ndPerson: Word('задерживаешь', 3),
  singular3rdPerson: Word('задерживает', 3),
  plural1stPerson: Word('задерживаем', 3),
  plural2ndPerson: Word('задерживаете', 3),
  plural3rdPerson: Word('задерживают', 3),
  masculinePast: Word('задерживал', 3),
  femininePast: Word('задерживала', 3),
  neuterPast: Word('задерживало', 3),
  pluralPast: Word('задерживали', 3),
  imperativeInformal: Word('задерживай', 3),
  imperativeFormal: Word('задерживайте', 3),
  imperfect: ['задержать'],
};

perfectVerbs.set(задерживать.name.text, задерживать);

export { задерживать };