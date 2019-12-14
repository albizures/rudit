import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрывать: PerfectVerb = {
  name: Word('накрывать', 6),
  singular1stPerson: Word('накрываю', 6),
  singular2ndPerson: Word('накрываешь', 6),
  singular3rdPerson: Word('накрывает', 6),
  plural1stPerson: Word('накрываем', 6),
  plural2ndPerson: Word('накрываете', 6),
  plural3rdPerson: Word('накрывают', 6),
  masculinePast: Word('накрывал', 6),
  femininePast: Word('накрывала', 6),
  neuterPast: Word('накрывало', 6),
  pluralPast: Word('накрывали', 6),
  imperativeInformal: Word('накрывай', 6),
  imperativeFormal: Word('накрывайте', 6),
  imperfect: [],
};

perfectVerbs.set(накрывать.name.text, накрывать);

export { накрывать };