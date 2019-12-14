import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевалить: PerfectVerb = {
  name: Word('перевалить', 7),
  singular1stPerson: Word('перевалю', 7),
  singular2ndPerson: Word('перевалишь', 5),
  singular3rdPerson: Word('перевалит', 5),
  plural1stPerson: Word('перевалим', 5),
  plural2ndPerson: Word('перевалите', 5),
  plural3rdPerson: Word('перевалят', 5),
  masculinePast: Word('перевалил', 7),
  femininePast: Word('перевалила', 7),
  neuterPast: Word('перевалило', 7),
  pluralPast: Word('перевалили', 7),
  imperativeInformal: Word('перевали', 7),
  imperativeFormal: Word('перевалите', 7),
  imperfect: [],
};

perfectVerbs.set(перевалить.name.text, перевалить);

export { перевалить };