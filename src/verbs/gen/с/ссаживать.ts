import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссаживать: PerfectVerb = {
  name: Word('ссаживать', 2),
  singular1stPerson: Word('ссаживаю', 2),
  singular2ndPerson: Word('ссаживаешь', 2),
  singular3rdPerson: Word('ссаживает', 2),
  plural1stPerson: Word('ссаживаем', 2),
  plural2ndPerson: Word('ссаживаете', 2),
  plural3rdPerson: Word('ссаживают', 2),
  masculinePast: Word('ссаживал', 2),
  femininePast: Word('ссаживала', 2),
  neuterPast: Word('ссаживало', 2),
  pluralPast: Word('ссаживали', 2),
  imperativeInformal: Word('ссаживай', 2),
  imperativeFormal: Word('ссаживайте', 2),
  imperfect: [],
};

perfectVerbs.set(ссаживать.name.text, ссаживать);

export { ссаживать };