import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переносить: PerfectVerb = {
  name: Word('переносить', 7),
  singular1stPerson: Word('переношу', 7),
  singular2ndPerson: Word('переносишь', 5),
  singular3rdPerson: Word('переносит', 5),
  plural1stPerson: Word('переносим', 5),
  plural2ndPerson: Word('переносите', 5),
  plural3rdPerson: Word('переносят', 5),
  masculinePast: Word('переносил', 7),
  femininePast: Word('переносила', 7),
  neuterPast: Word('переносило', 7),
  pluralPast: Word('переносили', 7),
  imperativeInformal: Word('переноси', 7),
  imperativeFormal: Word('переносите', 7),
  imperfect: ['перенести'],
};

perfectVerbs.set(переносить.name.text, переносить);

export { переносить };