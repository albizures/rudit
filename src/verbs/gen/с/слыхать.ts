import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слыхать: PerfectVerb = {
  name: Word('слыхать', 4),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('', -1),
  singular3rdPerson: Word('', -1),
  plural1stPerson: Word('', -1),
  plural2ndPerson: Word('', -1),
  plural3rdPerson: Word('', -1),
  masculinePast: Word('слыхал', 4),
  femininePast: Word('слыхала', 4),
  neuterPast: Word('слыхало', 4),
  pluralPast: Word('слыхали', 4),
  imperativeInformal: Word('', -1),
  imperativeFormal: Word('', -1),
  imperfect: ['услыхать'],
};

perfectVerbs.set(слыхать.name.text, слыхать);

export { слыхать };