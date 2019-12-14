import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засыпать: PerfectVerb = {
  name: Word('засыпать', 5),
  singular1stPerson: Word('засыпаю', 5),
  singular2ndPerson: Word('засыпаешь', 5),
  singular3rdPerson: Word('засыпает', 5),
  plural1stPerson: Word('засыпаем', 5),
  plural2ndPerson: Word('засыпаете', 5),
  plural3rdPerson: Word('засыпают', 5),
  masculinePast: Word('засыпал', 5),
  femininePast: Word('засыпала', 5),
  neuterPast: Word('засыпало', 5),
  pluralPast: Word('засыпали', 5),
  imperativeInformal: Word('засыпай', 5),
  imperativeFormal: Word('засыпайте', 5),
  imperfect: ['засыпать'],
};

perfectVerbs.set(засыпать.name.text, засыпать);

export { засыпать };