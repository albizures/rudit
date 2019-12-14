import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испытывать: PerfectVerb = {
  name: Word('испытывать', 3),
  singular1stPerson: Word('испытываю', 3),
  singular2ndPerson: Word('испытываешь', 3),
  singular3rdPerson: Word('испытывает', 3),
  plural1stPerson: Word('испытываем', 3),
  plural2ndPerson: Word('испытываете', 3),
  plural3rdPerson: Word('испытывают', 3),
  masculinePast: Word('испытывал', 3),
  femininePast: Word('испытывала', 3),
  neuterPast: Word('испытывало', 3),
  pluralPast: Word('испытывали', 3),
  imperativeInformal: Word('испытывай', 3),
  imperativeFormal: Word('испытывайте', 3),
  imperfect: ['испытать'],
};

perfectVerbs.set(испытывать.name.text, испытывать);

export { испытывать };