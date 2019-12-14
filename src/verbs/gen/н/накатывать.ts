import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накатывать: PerfectVerb = {
  name: Word('накатывать', 3),
  singular1stPerson: Word('накатываю', 3),
  singular2ndPerson: Word('накатываешь', 3),
  singular3rdPerson: Word('накатывает', 3),
  plural1stPerson: Word('накатываем', 3),
  plural2ndPerson: Word('накатываете', 3),
  plural3rdPerson: Word('накатывают', 3),
  masculinePast: Word('накатывал', 3),
  femininePast: Word('накатывала', 3),
  neuterPast: Word('накатывало', 3),
  pluralPast: Word('накатывали', 3),
  imperativeInformal: Word('накатывай', 3),
  imperativeFormal: Word('накатывайте', 3),
  imperfect: [],
};

perfectVerbs.set(накатывать.name.text, накатывать);

export { накатывать };