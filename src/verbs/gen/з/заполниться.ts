import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заполниться: PerfectVerb = {
  name: Word('заполниться', 3),
  singular1stPerson: Word('заполнюсь', 3),
  singular2ndPerson: Word('заполнишься', 3),
  singular3rdPerson: Word('заполнится', 3),
  plural1stPerson: Word('заполнимся', 3),
  plural2ndPerson: Word('заполнитесь', 3),
  plural3rdPerson: Word('заполнятся', 3),
  masculinePast: Word('заполнился', 3),
  femininePast: Word('заполнилась', 3),
  neuterPast: Word('заполнилось', 3),
  pluralPast: Word('заполнились', 3),
  imperativeInformal: Word('заполнись', 3),
  imperativeFormal: Word('заполнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(заполниться.name.text, заполниться);

export { заполниться };