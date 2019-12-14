import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хвалить: PerfectVerb = {
  name: Word('хвалить', 4),
  singular1stPerson: Word('хвалю', 4),
  singular2ndPerson: Word('хвалишь', 2),
  singular3rdPerson: Word('хвалит', 2),
  plural1stPerson: Word('хвалим', 2),
  plural2ndPerson: Word('хвалите', 2),
  plural3rdPerson: Word('хвалят', 2),
  masculinePast: Word('хвалил', 4),
  femininePast: Word('хвалила', 4),
  neuterPast: Word('хвалило', 4),
  pluralPast: Word('хвалили', 4),
  imperativeInformal: Word('хвали', 4),
  imperativeFormal: Word('хвалите', 4),
  imperfect: ['похвалить'],
};

perfectVerbs.set(хвалить.name.text, хвалить);

export { хвалить };