import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечинить: PerfectVerb = {
  name: Word('перечинить', 7),
  singular1stPerson: Word('перечиню', 7),
  singular2ndPerson: Word('перечинишь', 5),
  singular3rdPerson: Word('перечинит', 5),
  plural1stPerson: Word('перечиним', 5),
  plural2ndPerson: Word('перечините', 5),
  plural3rdPerson: Word('перечинят', 5),
  masculinePast: Word('перечинил', 7),
  femininePast: Word('перечинила', 7),
  neuterPast: Word('перечинило', 7),
  pluralPast: Word('перечинили', 7),
  imperativeInformal: Word('перечини', 7),
  imperativeFormal: Word('перечините', 7),
  imperfect: [],
};

perfectVerbs.set(перечинить.name.text, перечинить);

export { перечинить };