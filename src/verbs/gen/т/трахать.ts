import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трахать: PerfectVerb = {
  name: Word('трахать', 2),
  singular1stPerson: Word('трахаю', 2),
  singular2ndPerson: Word('трахаешь', 2),
  singular3rdPerson: Word('трахает', 2),
  plural1stPerson: Word('трахаем', 2),
  plural2ndPerson: Word('трахаете', 2),
  plural3rdPerson: Word('трахают', 2),
  masculinePast: Word('трахал', 2),
  femininePast: Word('трахала', 2),
  neuterPast: Word('трахало', 2),
  pluralPast: Word('трахали', 2),
  imperativeInformal: Word('трахай', 2),
  imperativeFormal: Word('трахайте', 2),
  imperfect: ['трахнуть'],
};

perfectVerbs.set(трахать.name.text, трахать);

export { трахать };