import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отягощать: PerfectVerb = {
  name: Word('отягощать', 6),
  singular1stPerson: Word('отягощаю', 6),
  singular2ndPerson: Word('отягощаешь', 6),
  singular3rdPerson: Word('отягощает', 6),
  plural1stPerson: Word('отягощаем', 6),
  plural2ndPerson: Word('отягощаете', 6),
  plural3rdPerson: Word('отягощают', 6),
  masculinePast: Word('отягощал', 6),
  femininePast: Word('отягощала', 6),
  neuterPast: Word('отягощало', 6),
  pluralPast: Word('отягощали', 6),
  imperativeInformal: Word('отягощай', 6),
  imperativeFormal: Word('отягощайте', 6),
  imperfect: [],
};

perfectVerbs.set(отягощать.name.text, отягощать);

export { отягощать };