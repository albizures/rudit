import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const марать: PerfectVerb = {
  name: Word('марать', 3),
  singular1stPerson: Word('мараю', 3),
  singular2ndPerson: Word('мараешь', 3),
  singular3rdPerson: Word('марает', 3),
  plural1stPerson: Word('мараем', 3),
  plural2ndPerson: Word('мараете', 3),
  plural3rdPerson: Word('марают', 3),
  masculinePast: Word('марал', 3),
  femininePast: Word('марала', 3),
  neuterPast: Word('марало', 3),
  pluralPast: Word('марали', 3),
  imperativeInformal: Word('марай', 3),
  imperativeFormal: Word('марайте', 3),
  imperfect: ['замарать','намарать'],
};

perfectVerbs.set(марать.name.text, марать);

export { марать };