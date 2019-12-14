import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накладывать: PerfectVerb = {
  name: Word('накладывать', 4),
  singular1stPerson: Word('накладываю', 4),
  singular2ndPerson: Word('накладываешь', 4),
  singular3rdPerson: Word('накладывает', 4),
  plural1stPerson: Word('накладываем', 4),
  plural2ndPerson: Word('накладываете', 4),
  plural3rdPerson: Word('накладывают', 4),
  masculinePast: Word('накладывал', 4),
  femininePast: Word('накладывала', 4),
  neuterPast: Word('накладывало', 4),
  pluralPast: Word('накладывали', 4),
  imperativeInformal: Word('накладывай', 4),
  imperativeFormal: Word('накладывайте', 4),
  imperfect: [],
};

perfectVerbs.set(накладывать.name.text, накладывать);

export { накладывать };