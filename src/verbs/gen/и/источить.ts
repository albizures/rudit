import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const источить: PerfectVerb = {
  name: Word('источить', 5),
  singular1stPerson: Word('источу', 5),
  singular2ndPerson: Word('источишь', 3),
  singular3rdPerson: Word('источит', 3),
  plural1stPerson: Word('источим', 3),
  plural2ndPerson: Word('источите', 3),
  plural3rdPerson: Word('источат', 3),
  masculinePast: Word('источил', 5),
  femininePast: Word('источила', 5),
  neuterPast: Word('источило', 5),
  pluralPast: Word('источили', 5),
  imperativeInformal: Word('источи', 5),
  imperativeFormal: Word('источите', 5),
  imperfect: [],
};

perfectVerbs.set(источить.name.text, источить);

export { источить };