import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переместить: PerfectVerb = {
  name: Word('переместить', 8),
  singular1stPerson: Word('перемещу', 7),
  singular2ndPerson: Word('переместишь', 8),
  singular3rdPerson: Word('переместит', 8),
  plural1stPerson: Word('переместим', 8),
  plural2ndPerson: Word('переместите', 8),
  plural3rdPerson: Word('переместят', 8),
  masculinePast: Word('переместил', 8),
  femininePast: Word('переместила', 8),
  neuterPast: Word('переместило', 8),
  pluralPast: Word('переместили', 8),
  imperativeInformal: Word('перемести', 8),
  imperativeFormal: Word('переместите', 8),
  imperfect: ['перемещать'],
};

perfectVerbs.set(переместить.name.text, переместить);

export { переместить };