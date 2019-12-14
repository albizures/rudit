import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выказывать: PerfectVerb = {
  name: Word('выказывать', 3),
  singular1stPerson: Word('выказываю', 3),
  singular2ndPerson: Word('выказываешь', 3),
  singular3rdPerson: Word('выказывает', 3),
  plural1stPerson: Word('выказываем', 3),
  plural2ndPerson: Word('выказываете', 3),
  plural3rdPerson: Word('выказывают', 3),
  masculinePast: Word('выказывал', 3),
  femininePast: Word('выказывала', 3),
  neuterPast: Word('выказывало', 3),
  pluralPast: Word('выказывали', 3),
  imperativeInformal: Word('выказывай', 3),
  imperativeFormal: Word('выказывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выказывать.name.text, выказывать);

export { выказывать };