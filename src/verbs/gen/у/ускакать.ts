import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ускакать: PerfectVerb = {
  name: Word('ускакать', 5),
  singular1stPerson: Word('ускачу', 5),
  singular2ndPerson: Word('ускачешь', 3),
  singular3rdPerson: Word('ускачет', 3),
  plural1stPerson: Word('ускачем', 3),
  plural2ndPerson: Word('ускачете', 3),
  plural3rdPerson: Word('ускачут', 3),
  masculinePast: Word('ускакал', 5),
  femininePast: Word('ускакала', 5),
  neuterPast: Word('ускакало', 5),
  pluralPast: Word('ускакали', 5),
  imperativeInformal: Word('ускачи', 5),
  imperativeFormal: Word('ускачите', 5),
  imperfect: [],
};

perfectVerbs.set(ускакать.name.text, ускакать);

export { ускакать };