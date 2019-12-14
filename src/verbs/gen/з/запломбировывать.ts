import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запломбировывать: PerfectVerb = {
  name: Word('запломбировывать', 9),
  singular1stPerson: Word('запломбировываю', 9),
  singular2ndPerson: Word('запломбировываешь', 9),
  singular3rdPerson: Word('запломбировывает', 9),
  plural1stPerson: Word('запломбировываем', 9),
  plural2ndPerson: Word('запломбировываете', 9),
  plural3rdPerson: Word('запломбировывают', 9),
  masculinePast: Word('запломбировывал', 9),
  femininePast: Word('запломбировывала', 9),
  neuterPast: Word('запломбировывало', 9),
  pluralPast: Word('запломбировывали', 9),
  imperativeInformal: Word('запломбировывай', 9),
  imperativeFormal: Word('запломбировывайте', 9),
  imperfect: [],
};

perfectVerbs.set(запломбировывать.name.text, запломбировывать);

export { запломбировывать };