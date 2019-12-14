import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стрекотать: PerfectVerb = {
  name: Word('стрекотать', 7),
  singular1stPerson: Word('стрекочу', 7),
  singular2ndPerson: Word('стрекочешь', 5),
  singular3rdPerson: Word('стрекочет', 5),
  plural1stPerson: Word('стрекочем', 5),
  plural2ndPerson: Word('стрекочете', 5),
  plural3rdPerson: Word('стрекочут', 5),
  masculinePast: Word('стрекотал', 7),
  femininePast: Word('стрекотала', 7),
  neuterPast: Word('стрекотало', 7),
  pluralPast: Word('стрекотали', 7),
  imperativeInformal: Word('стрекочи', 7),
  imperativeFormal: Word('стрекочите', 7),
  imperfect: [],
};

perfectVerbs.set(стрекотать.name.text, стрекотать);

export { стрекотать };