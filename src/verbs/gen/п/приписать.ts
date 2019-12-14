import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приписать: PerfectVerb = {
  name: Word('приписать', 6),
  singular1stPerson: Word('припишу', 6),
  singular2ndPerson: Word('припишешь', 4),
  singular3rdPerson: Word('припишет', 4),
  plural1stPerson: Word('припишем', 4),
  plural2ndPerson: Word('припишете', 4),
  plural3rdPerson: Word('припишут', 4),
  masculinePast: Word('приписал', 6),
  femininePast: Word('приписала', 6),
  neuterPast: Word('приписало', 6),
  pluralPast: Word('приписали', 6),
  imperativeInformal: Word('припиши', 6),
  imperativeFormal: Word('припишите', 6),
  imperfect: ['приписывать'],
};

perfectVerbs.set(приписать.name.text, приписать);

export { приписать };