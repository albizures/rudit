import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принадлежать: PerfectVerb = {
  name: Word('принадлежать', 9),
  singular1stPerson: Word('принадлежу', 9),
  singular2ndPerson: Word('принадлежишь', 9),
  singular3rdPerson: Word('принадлежит', 9),
  plural1stPerson: Word('принадлежим', 9),
  plural2ndPerson: Word('принадлежите', 9),
  plural3rdPerson: Word('принадлежат', 9),
  masculinePast: Word('принадлежал', 9),
  femininePast: Word('принадлежала', 9),
  neuterPast: Word('принадлежало', 9),
  pluralPast: Word('принадлежали', 9),
  imperativeInformal: Word('принадлежи', 9),
  imperativeFormal: Word('принадлежите', 9),
  imperfect: [],
};

perfectVerbs.set(принадлежать.name.text, принадлежать);

export { принадлежать };