import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прощать: PerfectVerb = {
  name: Word('прощать', 4),
  singular1stPerson: Word('прощаю', 4),
  singular2ndPerson: Word('прощаешь', 4),
  singular3rdPerson: Word('прощает', 4),
  plural1stPerson: Word('прощаем', 4),
  plural2ndPerson: Word('прощаете', 4),
  plural3rdPerson: Word('прощают', 4),
  masculinePast: Word('прощал', 4),
  femininePast: Word('прощала', 4),
  neuterPast: Word('прощало', 4),
  pluralPast: Word('прощали', 4),
  imperativeInformal: Word('прощай', 4),
  imperativeFormal: Word('прощайте', 4),
  imperfect: ['простить'],
};

perfectVerbs.set(прощать.name.text, прощать);

export { прощать };