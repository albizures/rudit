import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкупать: PerfectVerb = {
  name: Word('подкупать', 6),
  singular1stPerson: Word('подкупаю', 6),
  singular2ndPerson: Word('подкупаешь', 6),
  singular3rdPerson: Word('подкупает', 6),
  plural1stPerson: Word('подкупаем', 6),
  plural2ndPerson: Word('подкупаете', 6),
  plural3rdPerson: Word('подкупают', 6),
  masculinePast: Word('подкупал', 6),
  femininePast: Word('подкупала', 6),
  neuterPast: Word('подкупало', 6),
  pluralPast: Word('подкупали', 6),
  imperativeInformal: Word('подкупай', 6),
  imperativeFormal: Word('подкупайте', 6),
  imperfect: ['подкупить'],
};

perfectVerbs.set(подкупать.name.text, подкупать);

export { подкупать };