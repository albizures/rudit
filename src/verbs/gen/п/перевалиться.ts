import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевалиться: PerfectVerb = {
  name: Word('перевалиться', 7),
  singular1stPerson: Word('перевалюсь', 7),
  singular2ndPerson: Word('перевалишься', 5),
  singular3rdPerson: Word('перевалится', 5),
  plural1stPerson: Word('перевалимся', 5),
  plural2ndPerson: Word('перевалитесь', 5),
  plural3rdPerson: Word('перевалятся', 5),
  masculinePast: Word('перевалился', 7),
  femininePast: Word('перевалилась', 7),
  neuterPast: Word('перевалилось', 7),
  pluralPast: Word('перевалились', 7),
  imperativeInformal: Word('перевались', 7),
  imperativeFormal: Word('перевалитесь', 7),
  imperfect: [],
};

perfectVerbs.set(перевалиться.name.text, перевалиться);

export { перевалиться };