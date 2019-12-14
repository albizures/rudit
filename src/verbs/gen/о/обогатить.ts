import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогатить: PerfectVerb = {
  name: Word('обогатить', 6),
  singular1stPerson: Word('обогащу', 6),
  singular2ndPerson: Word('обогатишь', 6),
  singular3rdPerson: Word('обогатит', 6),
  plural1stPerson: Word('обогатим', 6),
  plural2ndPerson: Word('обогатите', 6),
  plural3rdPerson: Word('обогатят', 6),
  masculinePast: Word('обогатил', 6),
  femininePast: Word('обогатила', 6),
  neuterPast: Word('обогатило', 6),
  pluralPast: Word('обогатили', 6),
  imperativeInformal: Word('обогати', 6),
  imperativeFormal: Word('обогатите', 6),
  imperfect: [],
};

perfectVerbs.set(обогатить.name.text, обогатить);

export { обогатить };