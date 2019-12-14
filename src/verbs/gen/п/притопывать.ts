import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притопывать: PerfectVerb = {
  name: Word('притопывать', 4),
  singular1stPerson: Word('притопываю', 4),
  singular2ndPerson: Word('притопываешь', 4),
  singular3rdPerson: Word('притопывает', 4),
  plural1stPerson: Word('притопываем', 4),
  plural2ndPerson: Word('притопываете', 4),
  plural3rdPerson: Word('притопывают', 4),
  masculinePast: Word('притопывал', 4),
  femininePast: Word('притопывала', 4),
  neuterPast: Word('притопывало', 4),
  pluralPast: Word('притопывали', 4),
  imperativeInformal: Word('притопывай', 4),
  imperativeFormal: Word('притопывайте', 4),
  imperfect: [],
};

perfectVerbs.set(притопывать.name.text, притопывать);

export { притопывать };