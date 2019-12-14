import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нащупать: PerfectVerb = {
  name: Word('нащупать', 3),
  singular1stPerson: Word('нащупаю', 3),
  singular2ndPerson: Word('нащупаешь', 3),
  singular3rdPerson: Word('нащупает', 3),
  plural1stPerson: Word('нащупаем', 3),
  plural2ndPerson: Word('нащупаете', 3),
  plural3rdPerson: Word('нащупают', 3),
  masculinePast: Word('нащупал', 3),
  femininePast: Word('нащупала', 3),
  neuterPast: Word('нащупало', 3),
  pluralPast: Word('нащупали', 3),
  imperativeInformal: Word('нащупай', 3),
  imperativeFormal: Word('нащупайте', 3),
  imperfect: [],
};

perfectVerbs.set(нащупать.name.text, нащупать);

export { нащупать };