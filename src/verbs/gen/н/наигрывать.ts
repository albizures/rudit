import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наигрывать: PerfectVerb = {
  name: Word('наигрывать', 2),
  singular1stPerson: Word('наигрываю', 2),
  singular2ndPerson: Word('наигрываешь', 2),
  singular3rdPerson: Word('наигрывает', 2),
  plural1stPerson: Word('наигрываем', 2),
  plural2ndPerson: Word('наигрываете', 2),
  plural3rdPerson: Word('наигрывают', 2),
  masculinePast: Word('наигрывал', 2),
  femininePast: Word('наигрывала', 2),
  neuterPast: Word('наигрывало', 2),
  pluralPast: Word('наигрывали', 2),
  imperativeInformal: Word('наигрывай', 2),
  imperativeFormal: Word('наигрывайте', 2),
  imperfect: [],
};

perfectVerbs.set(наигрывать.name.text, наигрывать);

export { наигрывать };