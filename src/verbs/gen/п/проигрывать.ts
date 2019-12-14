import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проигрывать: PerfectVerb = {
  name: Word('проигрывать', 3),
  singular1stPerson: Word('проигрываю', 3),
  singular2ndPerson: Word('проигрываешь', 3),
  singular3rdPerson: Word('проигрывает', 3),
  plural1stPerson: Word('проигрываем', 3),
  plural2ndPerson: Word('проигрываете', 3),
  plural3rdPerson: Word('проигрывают', 3),
  masculinePast: Word('проигрывал', 3),
  femininePast: Word('проигрывала', 3),
  neuterPast: Word('проигрывало', 3),
  pluralPast: Word('проигрывали', 3),
  imperativeInformal: Word('проигрывай', 3),
  imperativeFormal: Word('проигрывайте', 3),
  imperfect: ['проиграть'],
};

perfectVerbs.set(проигрывать.name.text, проигрывать);

export { проигрывать };