import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смущать: PerfectVerb = {
  name: Word('смущать', 4),
  singular1stPerson: Word('смущаю', 4),
  singular2ndPerson: Word('смущаешь', 4),
  singular3rdPerson: Word('смущает', 4),
  plural1stPerson: Word('смущаем', 4),
  plural2ndPerson: Word('смущаете', 4),
  plural3rdPerson: Word('смущают', 4),
  masculinePast: Word('смущал', 4),
  femininePast: Word('смущала', 4),
  neuterPast: Word('смущало', 4),
  pluralPast: Word('смущали', 4),
  imperativeInformal: Word('смущай', 4),
  imperativeFormal: Word('смущайте', 4),
  imperfect: ['смутить'],
};

perfectVerbs.set(смущать.name.text, смущать);

export { смущать };