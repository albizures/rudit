import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истрепать: PerfectVerb = {
  name: Word('истрепать', 6),
  singular1stPerson: Word('истреплю', 7),
  singular2ndPerson: Word('истреплешь', 4),
  singular3rdPerson: Word('истреплет', 4),
  plural1stPerson: Word('истреплем', 4),
  plural2ndPerson: Word('истреплете', 4),
  plural3rdPerson: Word('истреплют', 4),
  masculinePast: Word('истрепал', 6),
  femininePast: Word('истрепала', 6),
  neuterPast: Word('истрепало', 6),
  pluralPast: Word('истрепали', 6),
  imperativeInformal: Word('истрепли', 7),
  imperativeFormal: Word('истреплите', 7),
  imperfect: [],
};

perfectVerbs.set(истрепать.name.text, истрепать);

export { истрепать };