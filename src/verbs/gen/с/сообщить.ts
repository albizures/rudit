import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сообщить: PerfectVerb = {
  name: Word('сообщить', 5),
  singular1stPerson: Word('сообщу', 5),
  singular2ndPerson: Word('сообщишь', 5),
  singular3rdPerson: Word('сообщит', 5),
  plural1stPerson: Word('сообщим', 5),
  plural2ndPerson: Word('сообщите', 5),
  plural3rdPerson: Word('сообщат', 5),
  masculinePast: Word('сообщил', 5),
  femininePast: Word('сообщила', 5),
  neuterPast: Word('сообщило', 5),
  pluralPast: Word('сообщили', 5),
  imperativeInformal: Word('сообщи', 5),
  imperativeFormal: Word('сообщите', 5),
  imperfect: ['сообщать'],
};

perfectVerbs.set(сообщить.name.text, сообщить);

export { сообщить };