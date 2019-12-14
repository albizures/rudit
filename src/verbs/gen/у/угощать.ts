import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угощать: PerfectVerb = {
  name: Word('угощать', 4),
  singular1stPerson: Word('угощаю', 4),
  singular2ndPerson: Word('угощаешь', 4),
  singular3rdPerson: Word('угощает', 4),
  plural1stPerson: Word('угощаем', 4),
  plural2ndPerson: Word('угощаете', 4),
  plural3rdPerson: Word('угощают', 4),
  masculinePast: Word('угощал', 4),
  femininePast: Word('угощала', 4),
  neuterPast: Word('угощало', 4),
  pluralPast: Word('угощали', 4),
  imperativeInformal: Word('угощай', 4),
  imperativeFormal: Word('угощайте', 4),
  imperfect: ['угостить'],
};

perfectVerbs.set(угощать.name.text, угощать);

export { угощать };