import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исписывать: PerfectVerb = {
  name: Word('исписывать', 3),
  singular1stPerson: Word('исписываю', 3),
  singular2ndPerson: Word('исписываешь', 3),
  singular3rdPerson: Word('исписывает', 3),
  plural1stPerson: Word('исписываем', 3),
  plural2ndPerson: Word('исписываете', 3),
  plural3rdPerson: Word('исписывают', 3),
  masculinePast: Word('исписывал', 3),
  femininePast: Word('исписывала', 3),
  neuterPast: Word('исписывало', 3),
  pluralPast: Word('исписывали', 3),
  imperativeInformal: Word('исписывай', 3),
  imperativeFormal: Word('исписывайте', 3),
  imperfect: [],
};

perfectVerbs.set(исписывать.name.text, исписывать);

export { исписывать };