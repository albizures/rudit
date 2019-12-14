import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хранить: PerfectVerb = {
  name: Word('хранить', 4),
  singular1stPerson: Word('храню', 4),
  singular2ndPerson: Word('хранишь', 4),
  singular3rdPerson: Word('хранит', 4),
  plural1stPerson: Word('храним', 4),
  plural2ndPerson: Word('храните', 4),
  plural3rdPerson: Word('хранят', 4),
  masculinePast: Word('хранил', 4),
  femininePast: Word('хранила', 4),
  neuterPast: Word('хранило', 4),
  pluralPast: Word('хранили', 4),
  imperativeInformal: Word('храни', 4),
  imperativeFormal: Word('храните', 4),
  imperfect: [],
};

perfectVerbs.set(хранить.name.text, хранить);

export { хранить };