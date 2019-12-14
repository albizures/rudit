import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хулиганить: PerfectVerb = {
  name: Word('хулиганить', 5),
  singular1stPerson: Word('хулиганю', 5),
  singular2ndPerson: Word('хулиганишь', 5),
  singular3rdPerson: Word('хулиганит', 5),
  plural1stPerson: Word('хулиганим', 5),
  plural2ndPerson: Word('хулиганите', 5),
  plural3rdPerson: Word('хулиганят', 5),
  masculinePast: Word('хулиганил', 5),
  femininePast: Word('хулиганила', 5),
  neuterPast: Word('хулиганило', 5),
  pluralPast: Word('хулиганили', 5),
  imperativeInformal: Word('хулигань', 5),
  imperativeFormal: Word('хулиганьте', 5),
  imperfect: ['нахулиганить'],
};

perfectVerbs.set(хулиганить.name.text, хулиганить);

export { хулиганить };