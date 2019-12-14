import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доламывать: PerfectVerb = {
  name: Word('доламывать', 3),
  singular1stPerson: Word('доламываю', 3),
  singular2ndPerson: Word('доламываешь', 3),
  singular3rdPerson: Word('доламывает', 3),
  plural1stPerson: Word('доламываем', 3),
  plural2ndPerson: Word('доламываете', 3),
  plural3rdPerson: Word('доламывают', 3),
  masculinePast: Word('доламывал', 3),
  femininePast: Word('доламывала', 3),
  neuterPast: Word('доламывало', 3),
  pluralPast: Word('доламывали', 3),
  imperativeInformal: Word('доламывай', 3),
  imperativeFormal: Word('доламывайте', 3),
  imperfect: [],
};

perfectVerbs.set(доламывать.name.text, доламывать);

export { доламывать };