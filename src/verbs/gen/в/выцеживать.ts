import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выцеживать: PerfectVerb = {
  name: Word('выцеживать', 3),
  singular1stPerson: Word('выцеживаю', 3),
  singular2ndPerson: Word('выцеживаешь', 3),
  singular3rdPerson: Word('выцеживает', 3),
  plural1stPerson: Word('выцеживаем', 3),
  plural2ndPerson: Word('выцеживаете', 3),
  plural3rdPerson: Word('выцеживают', 3),
  masculinePast: Word('выцеживал', 3),
  femininePast: Word('выцеживала', 3),
  neuterPast: Word('выцеживало', 3),
  pluralPast: Word('выцеживали', 3),
  imperativeInformal: Word('выцеживай', 3),
  imperativeFormal: Word('выцеживайте', 3),
  imperfect: [],
};

perfectVerbs.set(выцеживать.name.text, выцеживать);

export { выцеживать };