import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протесать: PerfectVerb = {
  name: Word('протесать', 6),
  singular1stPerson: Word('протешу', 6),
  singular2ndPerson: Word('протешешь', 4),
  singular3rdPerson: Word('протешет', 4),
  plural1stPerson: Word('протешем', 4),
  plural2ndPerson: Word('протешете', 4),
  plural3rdPerson: Word('протешут', 4),
  masculinePast: Word('протесал', 6),
  femininePast: Word('протесала', 6),
  neuterPast: Word('протесало', 6),
  pluralPast: Word('протесали', 6),
  imperativeInformal: Word('протеши', 6),
  imperativeFormal: Word('протешите', 6),
  imperfect: [],
};

perfectVerbs.set(протесать.name.text, протесать);

export { протесать };