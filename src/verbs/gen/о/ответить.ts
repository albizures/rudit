import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ответить: PerfectVerb = {
  name: Word('ответить', 3),
  singular1stPerson: Word('отвечу', 3),
  singular2ndPerson: Word('ответишь', 3),
  singular3rdPerson: Word('ответит', 3),
  plural1stPerson: Word('ответим', 3),
  plural2ndPerson: Word('ответите', 3),
  plural3rdPerson: Word('ответят', 3),
  masculinePast: Word('ответил', 3),
  femininePast: Word('ответила', 3),
  neuterPast: Word('ответило', 3),
  pluralPast: Word('ответили', 3),
  imperativeInformal: Word('ответь', 3),
  imperativeFormal: Word('ответьте', 3),
  imperfect: ['отвечать'],
};

perfectVerbs.set(ответить.name.text, ответить);

export { ответить };