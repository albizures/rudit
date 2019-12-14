import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высосать: PerfectVerb = {
  name: Word('высосать', 1),
  singular1stPerson: Word('высосу', 1),
  singular2ndPerson: Word('высосешь', 1),
  singular3rdPerson: Word('высосет', 1),
  plural1stPerson: Word('высосем', 1),
  plural2ndPerson: Word('высосете', 1),
  plural3rdPerson: Word('высосут', 1),
  masculinePast: Word('высосал', 1),
  femininePast: Word('высосала', 1),
  neuterPast: Word('высосало', 1),
  pluralPast: Word('высосали', 1),
  imperativeInformal: Word('высоси', 1),
  imperativeFormal: Word('высосите', 1),
  imperfect: [],
};

perfectVerbs.set(высосать.name.text, высосать);

export { высосать };