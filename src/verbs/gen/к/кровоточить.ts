import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кровоточить: PerfectVerb = {
  name: Word('кровоточить', 8),
  singular1stPerson: Word('кровоточу', 8),
  singular2ndPerson: Word('кровоточишь', 8),
  singular3rdPerson: Word('кровоточит', 8),
  plural1stPerson: Word('кровоточим', 8),
  plural2ndPerson: Word('кровоточите', 8),
  plural3rdPerson: Word('кровоточат', 8),
  masculinePast: Word('кровоточил', 8),
  femininePast: Word('кровоточила', 8),
  neuterPast: Word('кровоточило', 8),
  pluralPast: Word('кровоточили', 8),
  imperativeInformal: Word('кровоточи', 8),
  imperativeFormal: Word('кровоточите', 8),
  imperfect: [],
};

perfectVerbs.set(кровоточить.name.text, кровоточить);

export { кровоточить };