import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ощупывать: PerfectVerb = {
  name: Word('ощупывать', 2),
  singular1stPerson: Word('ощупываю', 2),
  singular2ndPerson: Word('ощупываешь', 2),
  singular3rdPerson: Word('ощупывает', 2),
  plural1stPerson: Word('ощупываем', 2),
  plural2ndPerson: Word('ощупываете', 2),
  plural3rdPerson: Word('ощупывают', 2),
  masculinePast: Word('ощупывал', 2),
  femininePast: Word('ощупывала', 2),
  neuterPast: Word('ощупывало', 2),
  pluralPast: Word('ощупывали', 2),
  imperativeInformal: Word('ощупывай', 2),
  imperativeFormal: Word('ощупывайте', 2),
  imperfect: [],
};

perfectVerbs.set(ощупывать.name.text, ощупывать);

export { ощупывать };