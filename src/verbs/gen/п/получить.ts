import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const получить: PerfectVerb = {
  name: Word('получить', 5),
  singular1stPerson: Word('получу', 5),
  singular2ndPerson: Word('получишь', 3),
  singular3rdPerson: Word('получит', 3),
  plural1stPerson: Word('получим', 3),
  plural2ndPerson: Word('получите', 3),
  plural3rdPerson: Word('получат', 3),
  masculinePast: Word('получил', 5),
  femininePast: Word('получила', 5),
  neuterPast: Word('получило', 5),
  pluralPast: Word('получили', 5),
  imperativeInformal: Word('получи', 5),
  imperativeFormal: Word('получите', 5),
  imperfect: ['получать'],
};

perfectVerbs.set(получить.name.text, получить);

export { получить };