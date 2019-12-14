import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запомнить: PerfectVerb = {
  name: Word('запомнить', 3),
  singular1stPerson: Word('запомню', 3),
  singular2ndPerson: Word('запомнишь', 3),
  singular3rdPerson: Word('запомнит', 3),
  plural1stPerson: Word('запомним', 3),
  plural2ndPerson: Word('запомните', 3),
  plural3rdPerson: Word('запомнят', 3),
  masculinePast: Word('запомнил', 3),
  femininePast: Word('запомнила', 3),
  neuterPast: Word('запомнило', 3),
  pluralPast: Word('запомнили', 3),
  imperativeInformal: Word('запомни', 3),
  imperativeFormal: Word('запомните', 3),
  imperfect: ['запоминать','помнить'],
};

perfectVerbs.set(запомнить.name.text, запомнить);

export { запомнить };