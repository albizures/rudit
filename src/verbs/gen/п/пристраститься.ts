import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристраститься: PerfectVerb = {
  name: Word('пристраститься', 9),
  singular1stPerson: Word('пристращусь', 8),
  singular2ndPerson: Word('пристрастишься', 9),
  singular3rdPerson: Word('пристрастится', 9),
  plural1stPerson: Word('пристрастимся', 9),
  plural2ndPerson: Word('пристраститесь', 9),
  plural3rdPerson: Word('пристрастятся', 9),
  masculinePast: Word('пристрастился', 9),
  femininePast: Word('пристрастилась', 9),
  neuterPast: Word('пристрастилось', 9),
  pluralPast: Word('пристрастились', 9),
  imperativeInformal: Word('пристрастись', 9),
  imperativeFormal: Word('пристраститесь', 9),
  imperfect: [],
};

perfectVerbs.set(пристраститься.name.text, пристраститься);

export { пристраститься };