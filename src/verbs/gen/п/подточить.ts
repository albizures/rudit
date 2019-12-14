import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подточить: PerfectVerb = {
  name: Word('подточить', 6),
  singular1stPerson: Word('подточу', 6),
  singular2ndPerson: Word('подточишь', 4),
  singular3rdPerson: Word('подточит', 4),
  plural1stPerson: Word('подточим', 4),
  plural2ndPerson: Word('подточите', 4),
  plural3rdPerson: Word('подточат', 4),
  masculinePast: Word('подточил', 6),
  femininePast: Word('подточила', 6),
  neuterPast: Word('подточило', 6),
  pluralPast: Word('подточили', 6),
  imperativeInformal: Word('подточи', 6),
  imperativeFormal: Word('подточите', 6),
  imperfect: [],
};

perfectVerbs.set(подточить.name.text, подточить);

export { подточить };