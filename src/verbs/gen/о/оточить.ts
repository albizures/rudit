import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оточить: PerfectVerb = {
  name: Word('оточить', 4),
  singular1stPerson: Word('оточу', 4),
  singular2ndPerson: Word('оточишь', 2),
  singular3rdPerson: Word('оточит', 2),
  plural1stPerson: Word('оточим', 2),
  plural2ndPerson: Word('оточите', 2),
  plural3rdPerson: Word('оточат', 2),
  masculinePast: Word('оточил', 4),
  femininePast: Word('оточила', 4),
  neuterPast: Word('оточило', 4),
  pluralPast: Word('оточили', 4),
  imperativeInformal: Word('оточи', 4),
  imperativeFormal: Word('оточите', 4),
  imperfect: [],
};

perfectVerbs.set(оточить.name.text, оточить);

export { оточить };