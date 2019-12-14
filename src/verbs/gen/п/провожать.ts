import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провожать: PerfectVerb = {
  name: Word('провожать', 6),
  singular1stPerson: Word('провожаю', 6),
  singular2ndPerson: Word('провожаешь', 6),
  singular3rdPerson: Word('провожает', 6),
  plural1stPerson: Word('провожаем', 6),
  plural2ndPerson: Word('провожаете', 6),
  plural3rdPerson: Word('провожают', 6),
  masculinePast: Word('провожал', 6),
  femininePast: Word('провожала', 6),
  neuterPast: Word('провожало', 6),
  pluralPast: Word('провожали', 6),
  imperativeInformal: Word('провожай', 6),
  imperativeFormal: Word('провожайте', 6),
  imperfect: ['проводить'],
};

perfectVerbs.set(провожать.name.text, провожать);

export { провожать };