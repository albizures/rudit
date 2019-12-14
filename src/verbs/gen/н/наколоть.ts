import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наколоть: PerfectVerb = {
  name: Word('наколоть', 5),
  singular1stPerson: Word('наколю', 5),
  singular2ndPerson: Word('наколешь', 3),
  singular3rdPerson: Word('наколет', 3),
  plural1stPerson: Word('наколем', 3),
  plural2ndPerson: Word('наколете', 3),
  plural3rdPerson: Word('наколют', 3),
  masculinePast: Word('наколол', 5),
  femininePast: Word('наколола', 5),
  neuterPast: Word('накололо', 5),
  pluralPast: Word('накололи', 5),
  imperativeInformal: Word('наколи', 5),
  imperativeFormal: Word('наколите', 5),
  imperfect: [],
};

perfectVerbs.set(наколоть.name.text, наколоть);

export { наколоть };