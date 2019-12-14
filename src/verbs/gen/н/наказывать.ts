import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наказывать: PerfectVerb = {
  name: Word('наказывать', 3),
  singular1stPerson: Word('наказываю', 3),
  singular2ndPerson: Word('наказываешь', 3),
  singular3rdPerson: Word('наказывает', 3),
  plural1stPerson: Word('наказываем', 3),
  plural2ndPerson: Word('наказываете', 3),
  plural3rdPerson: Word('наказывают', 3),
  masculinePast: Word('наказывал', 3),
  femininePast: Word('наказывала', 3),
  neuterPast: Word('наказывало', 3),
  pluralPast: Word('наказывали', 3),
  imperativeInformal: Word('наказывай', 3),
  imperativeFormal: Word('наказывайте', 3),
  imperfect: ['наказать'],
};

perfectVerbs.set(наказывать.name.text, наказывать);

export { наказывать };