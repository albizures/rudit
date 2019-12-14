import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всполошиться: PerfectVerb = {
  name: Word('всполошиться', 7),
  singular1stPerson: Word('всполошусь', 7),
  singular2ndPerson: Word('всполошишься', 7),
  singular3rdPerson: Word('всполошится', 7),
  plural1stPerson: Word('всполошимся', 7),
  plural2ndPerson: Word('всполошитесь', 7),
  plural3rdPerson: Word('всполошатся', 7),
  masculinePast: Word('всполошился', 7),
  femininePast: Word('всполошилась', 7),
  neuterPast: Word('всполошилось', 7),
  pluralPast: Word('всполошились', 7),
  imperativeInformal: Word('всполошись', 7),
  imperativeFormal: Word('всполошитесь', 7),
  imperfect: [],
};

perfectVerbs.set(всполошиться.name.text, всполошиться);

export { всполошиться };