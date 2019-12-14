import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наламывать: PerfectVerb = {
  name: Word('наламывать', 3),
  singular1stPerson: Word('наламываю', 3),
  singular2ndPerson: Word('наламываешь', 3),
  singular3rdPerson: Word('наламывает', 3),
  plural1stPerson: Word('наламываем', 3),
  plural2ndPerson: Word('наламываете', 3),
  plural3rdPerson: Word('наламывают', 3),
  masculinePast: Word('наламывал', 3),
  femininePast: Word('наламывала', 3),
  neuterPast: Word('наламывало', 3),
  pluralPast: Word('наламывали', 3),
  imperativeInformal: Word('наламывай', 3),
  imperativeFormal: Word('наламывайте', 3),
  imperfect: [],
};

perfectVerbs.set(наламывать.name.text, наламывать);

export { наламывать };