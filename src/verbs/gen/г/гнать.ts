import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнать: PerfectVerb = {
  name: Word('гнать', 2),
  singular1stPerson: Word('гоню', 3),
  singular2ndPerson: Word('гонишь', 1),
  singular3rdPerson: Word('гонит', 1),
  plural1stPerson: Word('гоним', 1),
  plural2ndPerson: Word('гоните', 1),
  plural3rdPerson: Word('гонят', 1),
  masculinePast: Word('гнал', 2),
  femininePast: Word('гнала', 4),
  neuterPast: Word('гнало', 2),
  pluralPast: Word('гнали', 2),
  imperativeInformal: Word('гони', 3),
  imperativeFormal: Word('гоните', 3),
  imperfect: ['погнать','загнать'],
};

perfectVerbs.set(гнать.name.text, гнать);

export { гнать };