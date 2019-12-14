import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const решать: PerfectVerb = {
  name: Word('решать', 3),
  singular1stPerson: Word('решаю', 3),
  singular2ndPerson: Word('решаешь', 3),
  singular3rdPerson: Word('решает', 3),
  plural1stPerson: Word('решаем', 3),
  plural2ndPerson: Word('решаете', 3),
  plural3rdPerson: Word('решают', 3),
  masculinePast: Word('решал', 3),
  femininePast: Word('решала', 3),
  neuterPast: Word('решало', 3),
  pluralPast: Word('решали', 3),
  imperativeInformal: Word('решай', 3),
  imperativeFormal: Word('решайте', 3),
  imperfect: ['решить'],
};

perfectVerbs.set(решать.name.text, решать);

export { решать };