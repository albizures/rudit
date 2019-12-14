import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снаряжать: PerfectVerb = {
  name: Word('снаряжать', 6),
  singular1stPerson: Word('снаряжаю', 6),
  singular2ndPerson: Word('снаряжаешь', 6),
  singular3rdPerson: Word('снаряжает', 6),
  plural1stPerson: Word('снаряжаем', 6),
  plural2ndPerson: Word('снаряжаете', 6),
  plural3rdPerson: Word('снаряжают', 6),
  masculinePast: Word('снаряжал', 6),
  femininePast: Word('снаряжала', 6),
  neuterPast: Word('снаряжало', 6),
  pluralPast: Word('снаряжали', 6),
  imperativeInformal: Word('снаряжай', 6),
  imperativeFormal: Word('снаряжайте', 6),
  imperfect: ['снарядить'],
};

perfectVerbs.set(снаряжать.name.text, снаряжать);

export { снаряжать };