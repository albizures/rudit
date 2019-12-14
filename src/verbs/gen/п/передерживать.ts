import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передерживать: PerfectVerb = {
  name: Word('передерживать', 5),
  singular1stPerson: Word('передерживаю', 5),
  singular2ndPerson: Word('передерживаешь', 5),
  singular3rdPerson: Word('передерживает', 5),
  plural1stPerson: Word('передерживаем', 5),
  plural2ndPerson: Word('передерживаете', 5),
  plural3rdPerson: Word('передерживают', 5),
  masculinePast: Word('передерживал', 5),
  femininePast: Word('передерживала', 5),
  neuterPast: Word('передерживало', 5),
  pluralPast: Word('передерживали', 5),
  imperativeInformal: Word('передерживай', 5),
  imperativeFormal: Word('передерживайте', 5),
  imperfect: [],
};

perfectVerbs.set(передерживать.name.text, передерживать);

export { передерживать };