import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отяготить: PerfectVerb = {
  name: Word('отяготить', 6),
  singular1stPerson: Word('отягощу', 6),
  singular2ndPerson: Word('отяготишь', 6),
  singular3rdPerson: Word('отяготит', 6),
  plural1stPerson: Word('отяготим', 6),
  plural2ndPerson: Word('отяготите', 6),
  plural3rdPerson: Word('отяготят', 6),
  masculinePast: Word('отяготил', 6),
  femininePast: Word('отяготила', 6),
  neuterPast: Word('отяготило', 6),
  pluralPast: Word('отяготили', 6),
  imperativeInformal: Word('отяготи', 6),
  imperativeFormal: Word('отяготите', 6),
  imperfect: [],
};

perfectVerbs.set(отяготить.name.text, отяготить);

export { отяготить };