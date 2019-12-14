import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придерживать: PerfectVerb = {
  name: Word('придерживать', 4),
  singular1stPerson: Word('придерживаю', 4),
  singular2ndPerson: Word('придерживаешь', 4),
  singular3rdPerson: Word('придерживает', 4),
  plural1stPerson: Word('придерживаем', 4),
  plural2ndPerson: Word('придерживаете', 4),
  plural3rdPerson: Word('придерживают', 4),
  masculinePast: Word('придерживал', 4),
  femininePast: Word('придерживала', 4),
  neuterPast: Word('придерживало', 4),
  pluralPast: Word('придерживали', 4),
  imperativeInformal: Word('придерживай', 4),
  imperativeFormal: Word('придерживайте', 4),
  imperfect: [],
};

perfectVerbs.set(придерживать.name.text, придерживать);

export { придерживать };