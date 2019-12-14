import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъесть: PerfectVerb = {
  name: Word('разъесть', 4),
  singular1stPerson: Word('разъем', 4),
  singular2ndPerson: Word('разъешь', 4),
  singular3rdPerson: Word('разъест', 4),
  plural1stPerson: Word('разъедим', 6),
  plural2ndPerson: Word('разъедите', 6),
  plural3rdPerson: Word('разъедят', 6),
  masculinePast: Word('разъел', 4),
  femininePast: Word('разъела', 4),
  neuterPast: Word('разъело', 4),
  pluralPast: Word('разъели', 4),
  imperativeInformal: Word('разъешь', 4),
  imperativeFormal: Word('разъешьте', 4),
  imperfect: ['разъедать'],
};

perfectVerbs.set(разъесть.name.text, разъесть);

export { разъесть };