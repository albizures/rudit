import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оживить: PerfectVerb = {
  name: Word('оживить', 4),
  singular1stPerson: Word('оживлю', 5),
  singular2ndPerson: Word('оживишь', 4),
  singular3rdPerson: Word('оживит', 4),
  plural1stPerson: Word('оживим', 4),
  plural2ndPerson: Word('оживите', 4),
  plural3rdPerson: Word('оживят', 4),
  masculinePast: Word('оживил', 4),
  femininePast: Word('оживила', 4),
  neuterPast: Word('оживило', 4),
  pluralPast: Word('оживили', 4),
  imperativeInformal: Word('оживи', 4),
  imperativeFormal: Word('оживите', 4),
  imperfect: [],
};

perfectVerbs.set(оживить.name.text, оживить);

export { оживить };