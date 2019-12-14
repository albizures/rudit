import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развинтить: PerfectVerb = {
  name: Word('развинтить', 7),
  singular1stPerson: Word('развинчу', 7),
  singular2ndPerson: Word('развинтишь', 4),
  singular3rdPerson: Word('развинтит', 4),
  plural1stPerson: Word('развинтим', 4),
  plural2ndPerson: Word('развинтите', 4),
  plural3rdPerson: Word('развинтят', 4),
  masculinePast: Word('развинтил', 7),
  femininePast: Word('развинтила', 7),
  neuterPast: Word('развинтило', 7),
  pluralPast: Word('развинтили', 7),
  imperativeInformal: Word('развинти', 7),
  imperativeFormal: Word('развинтите', 7),
  imperfect: [],
};

perfectVerbs.set(развинтить.name.text, развинтить);

export { развинтить };