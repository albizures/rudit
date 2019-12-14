import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выследить: PerfectVerb = {
  name: Word('выследить', 1),
  singular1stPerson: Word('выслежу', 1),
  singular2ndPerson: Word('выследишь', 1),
  singular3rdPerson: Word('выследит', 1),
  plural1stPerson: Word('выследим', 1),
  plural2ndPerson: Word('выследите', 1),
  plural3rdPerson: Word('выследят', 1),
  masculinePast: Word('выследил', 1),
  femininePast: Word('выследила', 1),
  neuterPast: Word('выследило', 1),
  pluralPast: Word('выследили', 1),
  imperativeInformal: Word('выследи', 1),
  imperativeFormal: Word('выследите', 1),
  imperfect: [],
};

perfectVerbs.set(выследить.name.text, выследить);

export { выследить };