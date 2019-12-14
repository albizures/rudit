import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгадывать: PerfectVerb = {
  name: Word('выгадывать', 3),
  singular1stPerson: Word('выгадываю', 3),
  singular2ndPerson: Word('выгадываешь', 3),
  singular3rdPerson: Word('выгадывает', 3),
  plural1stPerson: Word('выгадываем', 3),
  plural2ndPerson: Word('выгадываете', 3),
  plural3rdPerson: Word('выгадывают', 3),
  masculinePast: Word('выгадывал', 3),
  femininePast: Word('выгадывала', 3),
  neuterPast: Word('выгадывало', 3),
  pluralPast: Word('выгадывали', 3),
  imperativeInformal: Word('выгадывай', 3),
  imperativeFormal: Word('выгадывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выгадывать.name.text, выгадывать);

export { выгадывать };