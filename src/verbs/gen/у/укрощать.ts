import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрощать: PerfectVerb = {
  name: Word('укрощать', 5),
  singular1stPerson: Word('укрощаю', 5),
  singular2ndPerson: Word('укрощаешь', 5),
  singular3rdPerson: Word('укрощает', 5),
  plural1stPerson: Word('укрощаем', 5),
  plural2ndPerson: Word('укрощаете', 5),
  plural3rdPerson: Word('укрощают', 5),
  masculinePast: Word('укрощал', 5),
  femininePast: Word('укрощала', 5),
  neuterPast: Word('укрощало', 5),
  pluralPast: Word('укрощали', 5),
  imperativeInformal: Word('укрощай', 5),
  imperativeFormal: Word('укрощайте', 5),
  imperfect: [],
};

perfectVerbs.set(укрощать.name.text, укрощать);

export { укрощать };