import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покусывать: PerfectVerb = {
  name: Word('покусывать', 3),
  singular1stPerson: Word('покусываю', 3),
  singular2ndPerson: Word('покусываешь', 3),
  singular3rdPerson: Word('покусывает', 3),
  plural1stPerson: Word('покусываем', 3),
  plural2ndPerson: Word('покусываете', 3),
  plural3rdPerson: Word('покусывают', 3),
  masculinePast: Word('покусывал', 3),
  femininePast: Word('покусывала', 3),
  neuterPast: Word('покусывало', 3),
  pluralPast: Word('покусывали', 3),
  imperativeInformal: Word('покусывай', 3),
  imperativeFormal: Word('покусывайте', 3),
  imperfect: [],
};

perfectVerbs.set(покусывать.name.text, покусывать);

export { покусывать };