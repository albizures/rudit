import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ваксить: PerfectVerb = {
  name: Word('ваксить', 1),
  singular1stPerson: Word('вакшу', 1),
  singular2ndPerson: Word('ваксишь', 1),
  singular3rdPerson: Word('ваксит', 1),
  plural1stPerson: Word('ваксим', 1),
  plural2ndPerson: Word('ваксите', 1),
  plural3rdPerson: Word('ваксят', 1),
  masculinePast: Word('ваксил', 1),
  femininePast: Word('ваксила', 1),
  neuterPast: Word('ваксило', 1),
  pluralPast: Word('ваксили', 1),
  imperativeInformal: Word('вакси', 1),
  imperativeFormal: Word('ваксите', 1),
  imperfect: [],
};

perfectVerbs.set(ваксить.name.text, ваксить);

export { ваксить };