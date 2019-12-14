import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбудораживать: PerfectVerb = {
  name: Word('взбудораживать', 7),
  singular1stPerson: Word('взбудораживаю', 7),
  singular2ndPerson: Word('взбудораживаешь', 7),
  singular3rdPerson: Word('взбудораживает', 7),
  plural1stPerson: Word('взбудораживаем', 7),
  plural2ndPerson: Word('взбудораживаете', 7),
  plural3rdPerson: Word('взбудораживают', 7),
  masculinePast: Word('взбудораживал', 7),
  femininePast: Word('взбудораживала', 7),
  neuterPast: Word('взбудораживало', 7),
  pluralPast: Word('взбудораживали', 7),
  imperativeInformal: Word('взбудораживай', 7),
  imperativeFormal: Word('взбудораживайте', 7),
  imperfect: [],
};

perfectVerbs.set(взбудораживать.name.text, взбудораживать);

export { взбудораживать };