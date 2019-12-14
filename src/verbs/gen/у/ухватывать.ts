import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухватывать: PerfectVerb = {
  name: Word('ухватывать', 3),
  singular1stPerson: Word('ухватываю', 3),
  singular2ndPerson: Word('ухватываешь', 3),
  singular3rdPerson: Word('ухватывает', 3),
  plural1stPerson: Word('ухватываем', 3),
  plural2ndPerson: Word('ухватываете', 3),
  plural3rdPerson: Word('ухватывают', 3),
  masculinePast: Word('ухватывал', 3),
  femininePast: Word('ухватывала', 3),
  neuterPast: Word('ухватывало', 3),
  pluralPast: Word('ухватывали', 3),
  imperativeInformal: Word('ухватывай', 3),
  imperativeFormal: Word('ухватывайте', 3),
  imperfect: [],
};

perfectVerbs.set(ухватывать.name.text, ухватывать);

export { ухватывать };