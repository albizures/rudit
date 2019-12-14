import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оклеветать: PerfectVerb = {
  name: Word('оклеветать', 7),
  singular1stPerson: Word('оклевещу', 7),
  singular2ndPerson: Word('оклевещешь', 5),
  singular3rdPerson: Word('оклевещет', 5),
  plural1stPerson: Word('оклевещем', 5),
  plural2ndPerson: Word('оклевещете', 5),
  plural3rdPerson: Word('оклевещут', 5),
  masculinePast: Word('оклеветал', 7),
  femininePast: Word('оклеветала', 7),
  neuterPast: Word('оклеветало', 7),
  pluralPast: Word('оклеветали', 7),
  imperativeInformal: Word('оклевещи', 7),
  imperativeFormal: Word('оклевещите', 7),
  imperfect: [],
};

perfectVerbs.set(оклеветать.name.text, оклеветать);

export { оклеветать };