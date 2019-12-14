import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отощать: PerfectVerb = {
  name: Word('отощать', 4),
  singular1stPerson: Word('отощаю', 4),
  singular2ndPerson: Word('отощаешь', 4),
  singular3rdPerson: Word('отощает', 4),
  plural1stPerson: Word('отощаем', 4),
  plural2ndPerson: Word('отощаете', 4),
  plural3rdPerson: Word('отощают', 4),
  masculinePast: Word('отощал', 4),
  femininePast: Word('отощала', 4),
  neuterPast: Word('отощало', 4),
  pluralPast: Word('отощали', 4),
  imperativeInformal: Word('отощай', 4),
  imperativeFormal: Word('отощайте', 4),
  imperfect: [],
};

perfectVerbs.set(отощать.name.text, отощать);

export { отощать };