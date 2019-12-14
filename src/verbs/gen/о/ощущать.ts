import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ощущать: PerfectVerb = {
  name: Word('ощущать', 4),
  singular1stPerson: Word('ощущаю', 4),
  singular2ndPerson: Word('ощущаешь', 4),
  singular3rdPerson: Word('ощущает', 4),
  plural1stPerson: Word('ощущаем', 4),
  plural2ndPerson: Word('ощущаете', 4),
  plural3rdPerson: Word('ощущают', 4),
  masculinePast: Word('ощущал', 4),
  femininePast: Word('ощущала', 4),
  neuterPast: Word('ощущало', 4),
  pluralPast: Word('ощущали', 4),
  imperativeInformal: Word('ощущай', 4),
  imperativeFormal: Word('ощущайте', 4),
  imperfect: ['ощутить'],
};

perfectVerbs.set(ощущать.name.text, ощущать);

export { ощущать };