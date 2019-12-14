import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прослужить: PerfectVerb = {
  name: Word('прослужить', 7),
  singular1stPerson: Word('прослужу', 7),
  singular2ndPerson: Word('прослужишь', 5),
  singular3rdPerson: Word('прослужит', 5),
  plural1stPerson: Word('прослужим', 5),
  plural2ndPerson: Word('прослужите', 5),
  plural3rdPerson: Word('прослужат', 5),
  masculinePast: Word('прослужил', 7),
  femininePast: Word('прослужила', 7),
  neuterPast: Word('прослужило', 7),
  pluralPast: Word('прослужили', 7),
  imperativeInformal: Word('прослужи', 7),
  imperativeFormal: Word('прослужите', 7),
  imperfect: [],
};

perfectVerbs.set(прослужить.name.text, прослужить);

export { прослужить };