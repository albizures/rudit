import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докатывать: PerfectVerb = {
  name: Word('докатывать', 3),
  singular1stPerson: Word('докатываю', 3),
  singular2ndPerson: Word('докатываешь', 3),
  singular3rdPerson: Word('докатывает', 3),
  plural1stPerson: Word('докатываем', 3),
  plural2ndPerson: Word('докатываете', 3),
  plural3rdPerson: Word('докатывают', 3),
  masculinePast: Word('докатывал', 3),
  femininePast: Word('докатывала', 3),
  neuterPast: Word('докатывало', 3),
  pluralPast: Word('докатывали', 3),
  imperativeInformal: Word('докатывай', 3),
  imperativeFormal: Word('докатывайте', 3),
  imperfect: [],
};

perfectVerbs.set(докатывать.name.text, докатывать);

export { докатывать };