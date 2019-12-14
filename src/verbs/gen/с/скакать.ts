import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скакать: PerfectVerb = {
  name: Word('скакать', 4),
  singular1stPerson: Word('скачу', 4),
  singular2ndPerson: Word('скачешь', 2),
  singular3rdPerson: Word('скачет', 2),
  plural1stPerson: Word('скачем', 2),
  plural2ndPerson: Word('скачете', 2),
  plural3rdPerson: Word('скачут', 2),
  masculinePast: Word('скакал', 4),
  femininePast: Word('скакала', 4),
  neuterPast: Word('скакало', 4),
  pluralPast: Word('скакали', 4),
  imperativeInformal: Word('скачи', 4),
  imperativeFormal: Word('скачите', 4),
  imperfect: [],
};

perfectVerbs.set(скакать.name.text, скакать);

export { скакать };