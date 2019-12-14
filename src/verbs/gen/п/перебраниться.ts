import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебраниться: PerfectVerb = {
  name: Word('перебраниться', 8),
  singular1stPerson: Word('перебранюсь', 8),
  singular2ndPerson: Word('перебранишься', 8),
  singular3rdPerson: Word('перебранится', 8),
  plural1stPerson: Word('перебранимся', 8),
  plural2ndPerson: Word('перебранитесь', 8),
  plural3rdPerson: Word('перебранятся', 8),
  masculinePast: Word('перебранился', 8),
  femininePast: Word('перебранилась', 8),
  neuterPast: Word('перебранилось', 8),
  pluralPast: Word('перебранились', 8),
  imperativeInformal: Word('перебранись', 8),
  imperativeFormal: Word('перебранитесь', 8),
  imperfect: [],
};

perfectVerbs.set(перебраниться.name.text, перебраниться);

export { перебраниться };