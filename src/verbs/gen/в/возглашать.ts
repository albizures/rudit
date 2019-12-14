import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возглашать: PerfectVerb = {
  name: Word('возглашать', 7),
  singular1stPerson: Word('возглашаю', 7),
  singular2ndPerson: Word('возглашаешь', 7),
  singular3rdPerson: Word('возглашает', 7),
  plural1stPerson: Word('возглашаем', 7),
  plural2ndPerson: Word('возглашаете', 7),
  plural3rdPerson: Word('возглашают', 7),
  masculinePast: Word('возглашал', 7),
  femininePast: Word('возглашала', 7),
  neuterPast: Word('возглашало', 7),
  pluralPast: Word('возглашали', 7),
  imperativeInformal: Word('возглашай', 7),
  imperativeFormal: Word('возглашайте', 7),
  imperfect: [],
};

perfectVerbs.set(возглашать.name.text, возглашать);

export { возглашать };