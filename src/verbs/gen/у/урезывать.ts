import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const урезывать: PerfectVerb = {
  name: Word('урезывать', 2),
  singular1stPerson: Word('урезываю', 2),
  singular2ndPerson: Word('урезываешь', 2),
  singular3rdPerson: Word('урезывает', 2),
  plural1stPerson: Word('урезываем', 2),
  plural2ndPerson: Word('урезываете', 2),
  plural3rdPerson: Word('урезывают', 2),
  masculinePast: Word('урезывал', 2),
  femininePast: Word('урезывала', 2),
  neuterPast: Word('урезывало', 2),
  pluralPast: Word('урезывали', 2),
  imperativeInformal: Word('урезывай', 2),
  imperativeFormal: Word('урезывайте', 2),
  imperfect: ['урезать'],
};

perfectVerbs.set(урезывать.name.text, урезывать);

export { урезывать };