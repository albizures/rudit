import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защипывать: PerfectVerb = {
  name: Word('защипывать', 3),
  singular1stPerson: Word('защипываю', 3),
  singular2ndPerson: Word('защипываешь', 3),
  singular3rdPerson: Word('защипывает', 3),
  plural1stPerson: Word('защипываем', 3),
  plural2ndPerson: Word('защипываете', 3),
  plural3rdPerson: Word('защипывают', 3),
  masculinePast: Word('защипывал', 3),
  femininePast: Word('защипывала', 3),
  neuterPast: Word('защипывало', 3),
  pluralPast: Word('защипывали', 3),
  imperativeInformal: Word('защипывай', 3),
  imperativeFormal: Word('защипывайте', 3),
  imperfect: [],
};

perfectVerbs.set(защипывать.name.text, защипывать);

export { защипывать };