import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклеветать: PerfectVerb = {
  name: Word('наклеветать', 8),
  singular1stPerson: Word('наклевещу', 8),
  singular2ndPerson: Word('наклевещешь', 6),
  singular3rdPerson: Word('наклевещет', 6),
  plural1stPerson: Word('наклевещем', 6),
  plural2ndPerson: Word('наклевещете', 6),
  plural3rdPerson: Word('наклевещут', 6),
  masculinePast: Word('наклеветал', 8),
  femininePast: Word('наклеветала', 8),
  neuterPast: Word('наклеветало', 8),
  pluralPast: Word('наклеветали', 8),
  imperativeInformal: Word('наклевещи', 8),
  imperativeFormal: Word('наклевещите', 8),
  imperfect: [],
};

perfectVerbs.set(наклеветать.name.text, наклеветать);

export { наклеветать };