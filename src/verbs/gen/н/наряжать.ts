import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наряжать: PerfectVerb = {
  name: Word('наряжать', 5),
  singular1stPerson: Word('наряжаю', 5),
  singular2ndPerson: Word('наряжаешь', 5),
  singular3rdPerson: Word('наряжает', 5),
  plural1stPerson: Word('наряжаем', 5),
  plural2ndPerson: Word('наряжаете', 5),
  plural3rdPerson: Word('наряжают', 5),
  masculinePast: Word('наряжал', 5),
  femininePast: Word('наряжала', 5),
  neuterPast: Word('наряжало', 5),
  pluralPast: Word('наряжали', 5),
  imperativeInformal: Word('наряжай', 5),
  imperativeFormal: Word('наряжайте', 5),
  imperfect: ['нарядить'],
};

perfectVerbs.set(наряжать.name.text, наряжать);

export { наряжать };