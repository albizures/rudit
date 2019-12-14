import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нащупывать: PerfectVerb = {
  name: Word('нащупывать', 3),
  singular1stPerson: Word('нащупываю', 3),
  singular2ndPerson: Word('нащупываешь', 3),
  singular3rdPerson: Word('нащупывает', 3),
  plural1stPerson: Word('нащупываем', 3),
  plural2ndPerson: Word('нащупываете', 3),
  plural3rdPerson: Word('нащупывают', 3),
  masculinePast: Word('нащупывал', 3),
  femininePast: Word('нащупывала', 3),
  neuterPast: Word('нащупывало', 3),
  pluralPast: Word('нащупывали', 3),
  imperativeInformal: Word('нащупывай', 3),
  imperativeFormal: Word('нащупывайте', 3),
  imperfect: [],
};

perfectVerbs.set(нащупывать.name.text, нащупывать);

export { нащупывать };