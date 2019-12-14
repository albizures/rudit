import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помнить: PerfectVerb = {
  name: Word('помнить', 4),
  singular1stPerson: Word('помню', 4),
  singular2ndPerson: Word('помнишь', 4),
  singular3rdPerson: Word('помнит', 4),
  plural1stPerson: Word('помним', 4),
  plural2ndPerson: Word('помните', 4),
  plural3rdPerson: Word('помнят', 4),
  masculinePast: Word('помнил', 4),
  femininePast: Word('помнила', 4),
  neuterPast: Word('помнило', 4),
  pluralPast: Word('помнили', 4),
  imperativeInformal: Word('помни', 4),
  imperativeFormal: Word('помните', 4),
  imperfect: ['мнить'],
};

perfectVerbs.set(помнить.name.text, помнить);

export { помнить };