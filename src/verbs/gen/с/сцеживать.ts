import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сцеживать: PerfectVerb = {
  name: Word('сцеживать', 2),
  singular1stPerson: Word('сцеживаю', 2),
  singular2ndPerson: Word('сцеживаешь', 2),
  singular3rdPerson: Word('сцеживает', 2),
  plural1stPerson: Word('сцеживаем', 2),
  plural2ndPerson: Word('сцеживаете', 2),
  plural3rdPerson: Word('сцеживают', 2),
  masculinePast: Word('сцеживал', 2),
  femininePast: Word('сцеживала', 2),
  neuterPast: Word('сцеживало', 2),
  pluralPast: Word('сцеживали', 2),
  imperativeInformal: Word('сцеживай', 2),
  imperativeFormal: Word('сцеживайте', 2),
  imperfect: [],
};

perfectVerbs.set(сцеживать.name.text, сцеживать);

export { сцеживать };