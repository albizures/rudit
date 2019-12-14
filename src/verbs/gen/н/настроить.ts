import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настроить: PerfectVerb = {
  name: Word('настроить', 5),
  singular1stPerson: Word('настрою', 5),
  singular2ndPerson: Word('настроишь', 5),
  singular3rdPerson: Word('настроит', 5),
  plural1stPerson: Word('настроим', 5),
  plural2ndPerson: Word('настроите', 5),
  plural3rdPerson: Word('настроят', 5),
  masculinePast: Word('настроил', 5),
  femininePast: Word('настроила', 5),
  neuterPast: Word('настроило', 5),
  pluralPast: Word('настроили', 5),
  imperativeInformal: Word('настрой', 5),
  imperativeFormal: Word('настройте', 5),
  imperfect: ['настраивать'],
};

perfectVerbs.set(настроить.name.text, настроить);

export { настроить };