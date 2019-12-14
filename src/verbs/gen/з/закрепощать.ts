import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрепощать: PerfectVerb = {
  name: Word('закрепощать', 8),
  singular1stPerson: Word('закрепощаю', 8),
  singular2ndPerson: Word('закрепощаешь', 8),
  singular3rdPerson: Word('закрепощает', 8),
  plural1stPerson: Word('закрепощаем', 8),
  plural2ndPerson: Word('закрепощаете', 8),
  plural3rdPerson: Word('закрепощают', 8),
  masculinePast: Word('закрепощал', 8),
  femininePast: Word('закрепощала', 8),
  neuterPast: Word('закрепощало', 8),
  pluralPast: Word('закрепощали', 8),
  imperativeInformal: Word('закрепощай', 8),
  imperativeFormal: Word('закрепощайте', 8),
  imperfect: [],
};

perfectVerbs.set(закрепощать.name.text, закрепощать);

export { закрепощать };