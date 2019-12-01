import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 2;

const toLook: Verb = {
  name: Word('смотреть', 5),
  singular1stPerson: Word('смотрю́', 5),
  singular2ndPerson: Word('смо́тришь', stress),
  singular3rdPerson: Word('смо́трит', stress),
  plural1stPerson: Word('смо́трим', stress),
  plural2ndPerson: Word('смо́трите', stress),
  plural3rdPerson: Word('смо́трят', stress),
  masculinePast: Word('смотре́л', 5),
  femininePast: Word('смотре́ла', 5),
  neuterPast: Word('смотре́ло', 5),
  pluralPast: Word('смотре́ли', 5),
  imperativeInformal: Word('смотри́', 5),
  imperativeFormal: Word('смотри́те', 5),
};

export { toLook };
