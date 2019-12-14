import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клеветать: PerfectVerb = {
  name: Word('клеветать', 6),
  singular1stPerson: Word('клевещу', 6),
  singular2ndPerson: Word('клевещешь', 4),
  singular3rdPerson: Word('клевещет', 4),
  plural1stPerson: Word('клевещем', 4),
  plural2ndPerson: Word('клевещете', 4),
  plural3rdPerson: Word('клевещут', 4),
  masculinePast: Word('клеветал', 6),
  femininePast: Word('клеветала', 6),
  neuterPast: Word('клеветало', 6),
  pluralPast: Word('клеветали', 6),
  imperativeInformal: Word('клевещи', 6),
  imperativeFormal: Word('клевещите', 6),
  imperfect: ['наклеветать','оклеветать'],
};

perfectVerbs.set(клеветать.name.text, клеветать);

export { клеветать };