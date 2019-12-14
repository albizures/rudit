import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нюхать: PerfectVerb = {
  name: Word('нюхать', 1),
  singular1stPerson: Word('нюхаю', 1),
  singular2ndPerson: Word('нюхаешь', 1),
  singular3rdPerson: Word('нюхает', 1),
  plural1stPerson: Word('нюхаем', 1),
  plural2ndPerson: Word('нюхаете', 1),
  plural3rdPerson: Word('нюхают', 1),
  masculinePast: Word('нюхал', 1),
  femininePast: Word('нюхала', 1),
  neuterPast: Word('нюхало', 1),
  pluralPast: Word('нюхали', 1),
  imperativeInformal: Word('нюхай', 1),
  imperativeFormal: Word('нюхайте', 1),
  imperfect: ['понюхать'],
};

perfectVerbs.set(нюхать.name.text, нюхать);

export { нюхать };