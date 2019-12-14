import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выламывать: PerfectVerb = {
  name: Word('выламывать', 3),
  singular1stPerson: Word('выламываю', 3),
  singular2ndPerson: Word('выламываешь', 3),
  singular3rdPerson: Word('выламывает', 3),
  plural1stPerson: Word('выламываем', 3),
  plural2ndPerson: Word('выламываете', 3),
  plural3rdPerson: Word('выламывают', 3),
  masculinePast: Word('выламывал', 3),
  femininePast: Word('выламывала', 3),
  neuterPast: Word('выламывало', 3),
  pluralPast: Word('выламывали', 3),
  imperativeInformal: Word('выламывай', 3),
  imperativeFormal: Word('выламывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выламывать.name.text, выламывать);

export { выламывать };