import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хвалиться: PerfectVerb = {
  name: Word('хвалиться', 4),
  singular1stPerson: Word('хвалюсь', 4),
  singular2ndPerson: Word('хвалишься', 2),
  singular3rdPerson: Word('хвалится', 2),
  plural1stPerson: Word('хвалимся', 2),
  plural2ndPerson: Word('хвалитесь', 2),
  plural3rdPerson: Word('хвалятся', 2),
  masculinePast: Word('хвалился', 4),
  femininePast: Word('хвалилась', 4),
  neuterPast: Word('хвалилось', 4),
  pluralPast: Word('хвалились', 4),
  imperativeInformal: Word('хвались', 4),
  imperativeFormal: Word('хвалитесь', 4),
  imperfect: [],
};

perfectVerbs.set(хвалиться.name.text, хвалиться);

export { хвалиться };