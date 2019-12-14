import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрощать: PerfectVerb = {
  name: Word('упрощать', 5),
  singular1stPerson: Word('упрощаю', 5),
  singular2ndPerson: Word('упрощаешь', 5),
  singular3rdPerson: Word('упрощает', 5),
  plural1stPerson: Word('упрощаем', 5),
  plural2ndPerson: Word('упрощаете', 5),
  plural3rdPerson: Word('упрощают', 5),
  masculinePast: Word('упрощал', 5),
  femininePast: Word('упрощала', 5),
  neuterPast: Word('упрощало', 5),
  pluralPast: Word('упрощали', 5),
  imperativeInformal: Word('упрощай', 5),
  imperativeFormal: Word('упрощайте', 5),
  imperfect: [],
};

perfectVerbs.set(упрощать.name.text, упрощать);

export { упрощать };