import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тяготить: PerfectVerb = {
  name: Word('тяготить', 5),
  singular1stPerson: Word('тягощу', 5),
  singular2ndPerson: Word('тяготишь', 5),
  singular3rdPerson: Word('тяготит', 5),
  plural1stPerson: Word('тяготим', 5),
  plural2ndPerson: Word('тяготите', 5),
  plural3rdPerson: Word('тяготят', 5),
  masculinePast: Word('тяготил', 5),
  femininePast: Word('тяготила', 5),
  neuterPast: Word('тяготило', 5),
  pluralPast: Word('тяготили', 5),
  imperativeInformal: Word('тяготи', 5),
  imperativeFormal: Word('тяготите', 5),
  imperfect: [],
};

perfectVerbs.set(тяготить.name.text, тяготить);

export { тяготить };