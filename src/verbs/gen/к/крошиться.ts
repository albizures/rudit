import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крошиться: PerfectVerb = {
  name: Word('крошиться', 4),
  singular1stPerson: Word('крошусь', 4),
  singular2ndPerson: Word('крошишься', 2),
  singular3rdPerson: Word('крошится', 2),
  plural1stPerson: Word('крошимся', 2),
  plural2ndPerson: Word('крошитесь', 2),
  plural3rdPerson: Word('крошатся', 2),
  masculinePast: Word('крошился', 4),
  femininePast: Word('крошилась', 4),
  neuterPast: Word('крошилось', 4),
  pluralPast: Word('крошились', 4),
  imperativeInformal: Word('крошись', 4),
  imperativeFormal: Word('крошитесь', 4),
  imperfect: [],
};

perfectVerbs.set(крошиться.name.text, крошиться);

export { крошиться };