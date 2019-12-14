import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прислуживать: PerfectVerb = {
  name: Word('прислуживать', 5),
  singular1stPerson: Word('прислуживаю', 5),
  singular2ndPerson: Word('прислуживаешь', 5),
  singular3rdPerson: Word('прислуживает', 5),
  plural1stPerson: Word('прислуживаем', 5),
  plural2ndPerson: Word('прислуживаете', 5),
  plural3rdPerson: Word('прислуживают', 5),
  masculinePast: Word('прислуживал', 5),
  femininePast: Word('прислуживала', 5),
  neuterPast: Word('прислуживало', 5),
  pluralPast: Word('прислуживали', 5),
  imperativeInformal: Word('прислуживай', 5),
  imperativeFormal: Word('прислуживайте', 5),
  imperfect: [],
};

perfectVerbs.set(прислуживать.name.text, прислуживать);

export { прислуживать };