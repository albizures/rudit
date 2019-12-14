import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откидывать: PerfectVerb = {
  name: Word('откидывать', 3),
  singular1stPerson: Word('откидываю', 3),
  singular2ndPerson: Word('откидываешь', 3),
  singular3rdPerson: Word('откидывает', 3),
  plural1stPerson: Word('откидываем', 3),
  plural2ndPerson: Word('откидываете', 3),
  plural3rdPerson: Word('откидывают', 3),
  masculinePast: Word('откидывал', 3),
  femininePast: Word('откидывала', 3),
  neuterPast: Word('откидывало', 3),
  pluralPast: Word('откидывали', 3),
  imperativeInformal: Word('откидывай', 3),
  imperativeFormal: Word('откидывайте', 3),
  imperfect: [],
};

perfectVerbs.set(откидывать.name.text, откидывать);

export { откидывать };