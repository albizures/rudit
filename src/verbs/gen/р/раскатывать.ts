import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскатывать: PerfectVerb = {
  name: Word('раскатывать', 4),
  singular1stPerson: Word('раскатываю', 4),
  singular2ndPerson: Word('раскатываешь', 4),
  singular3rdPerson: Word('раскатывает', 4),
  plural1stPerson: Word('раскатываем', 4),
  plural2ndPerson: Word('раскатываете', 4),
  plural3rdPerson: Word('раскатывают', 4),
  masculinePast: Word('раскатывал', 4),
  femininePast: Word('раскатывала', 4),
  neuterPast: Word('раскатывало', 4),
  pluralPast: Word('раскатывали', 4),
  imperativeInformal: Word('раскатывай', 4),
  imperativeFormal: Word('раскатывайте', 4),
  imperfect: ['раскатать','раскатить'],
};

perfectVerbs.set(раскатывать.name.text, раскатывать);

export { раскатывать };