import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оздоровить: PerfectVerb = {
  name: Word('оздоровить', 7),
  singular1stPerson: Word('оздоровлю', 8),
  singular2ndPerson: Word('оздоровишь', 7),
  singular3rdPerson: Word('оздоровит', 7),
  plural1stPerson: Word('оздоровим', 7),
  plural2ndPerson: Word('оздоровите', 7),
  plural3rdPerson: Word('оздоровят', 7),
  masculinePast: Word('оздоровил', 7),
  femininePast: Word('оздоровила', 7),
  neuterPast: Word('оздоровило', 7),
  pluralPast: Word('оздоровили', 7),
  imperativeInformal: Word('оздорови', 7),
  imperativeFormal: Word('оздоровите', 7),
  imperfect: [],
};

perfectVerbs.set(оздоровить.name.text, оздоровить);

export { оздоровить };