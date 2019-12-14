import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прискакать: PerfectVerb = {
  name: Word('прискакать', 7),
  singular1stPerson: Word('прискачу', 7),
  singular2ndPerson: Word('прискачешь', 5),
  singular3rdPerson: Word('прискачет', 5),
  plural1stPerson: Word('прискачем', 5),
  plural2ndPerson: Word('прискачете', 5),
  plural3rdPerson: Word('прискачут', 5),
  masculinePast: Word('прискакал', 7),
  femininePast: Word('прискакала', 7),
  neuterPast: Word('прискакало', 7),
  pluralPast: Word('прискакали', 7),
  imperativeInformal: Word('прискачи', 7),
  imperativeFormal: Word('прискачите', 7),
  imperfect: [],
};

perfectVerbs.set(прискакать.name.text, прискакать);

export { прискакать };