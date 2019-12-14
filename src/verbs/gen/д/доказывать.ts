import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доказывать: PerfectVerb = {
  name: Word('доказывать', 3),
  singular1stPerson: Word('доказываю', 3),
  singular2ndPerson: Word('доказываешь', 3),
  singular3rdPerson: Word('доказывает', 3),
  plural1stPerson: Word('доказываем', 3),
  plural2ndPerson: Word('доказываете', 3),
  plural3rdPerson: Word('доказывают', 3),
  masculinePast: Word('доказывал', 3),
  femininePast: Word('доказывала', 3),
  neuterPast: Word('доказывало', 3),
  pluralPast: Word('доказывали', 3),
  imperativeInformal: Word('доказывай', 3),
  imperativeFormal: Word('доказывайте', 3),
  imperfect: ['доказать'],
};

perfectVerbs.set(доказывать.name.text, доказывать);

export { доказывать };