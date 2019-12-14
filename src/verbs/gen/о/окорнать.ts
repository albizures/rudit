import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окорнать: PerfectVerb = {
  name: Word('окорнать', 5),
  singular1stPerson: Word('окорнаю', 5),
  singular2ndPerson: Word('окорнаешь', 5),
  singular3rdPerson: Word('окорнает', 5),
  plural1stPerson: Word('окорнаем', 5),
  plural2ndPerson: Word('окорнаете', 5),
  plural3rdPerson: Word('окорнают', 5),
  masculinePast: Word('окорнал', 5),
  femininePast: Word('окорнала', 5),
  neuterPast: Word('окорнало', 5),
  pluralPast: Word('окорнали', 5),
  imperativeInformal: Word('окорнай', 5),
  imperativeFormal: Word('окорнайте', 5),
  imperfect: [],
};

perfectVerbs.set(окорнать.name.text, окорнать);

export { окорнать };