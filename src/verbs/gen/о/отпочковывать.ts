import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпочковывать: PerfectVerb = {
  name: Word('отпочковывать', 6),
  singular1stPerson: Word('отпочковываю', 6),
  singular2ndPerson: Word('отпочковываешь', 6),
  singular3rdPerson: Word('отпочковывает', 6),
  plural1stPerson: Word('отпочковываем', 6),
  plural2ndPerson: Word('отпочковываете', 6),
  plural3rdPerson: Word('отпочковывают', 6),
  masculinePast: Word('отпочковывал', 6),
  femininePast: Word('отпочковывала', 6),
  neuterPast: Word('отпочковывало', 6),
  pluralPast: Word('отпочковывали', 6),
  imperativeInformal: Word('отпочковывай', 6),
  imperativeFormal: Word('отпочковывайте', 6),
  imperfect: ['отпочковаться'],
};

perfectVerbs.set(отпочковывать.name.text, отпочковывать);

export { отпочковывать };