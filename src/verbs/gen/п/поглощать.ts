import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглощать: PerfectVerb = {
  name: Word('поглощать', 6),
  singular1stPerson: Word('поглощаю', 6),
  singular2ndPerson: Word('поглощаешь', 6),
  singular3rdPerson: Word('поглощает', 6),
  plural1stPerson: Word('поглощаем', 6),
  plural2ndPerson: Word('поглощаете', 6),
  plural3rdPerson: Word('поглощают', 6),
  masculinePast: Word('поглощал', 6),
  femininePast: Word('поглощала', 6),
  neuterPast: Word('поглощало', 6),
  pluralPast: Word('поглощали', 6),
  imperativeInformal: Word('поглощай', 6),
  imperativeFormal: Word('поглощайте', 6),
  imperfect: ['поглотить'],
};

perfectVerbs.set(поглощать.name.text, поглощать);

export { поглощать };