import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const установиться: PerfectVerb = {
  name: Word('установиться', 7),
  singular1stPerson: Word('установлюсь', 8),
  singular2ndPerson: Word('установишься', 5),
  singular3rdPerson: Word('установится', 5),
  plural1stPerson: Word('установимся', 5),
  plural2ndPerson: Word('установитесь', 5),
  plural3rdPerson: Word('установятся', 5),
  masculinePast: Word('установился', 7),
  femininePast: Word('установилась', 7),
  neuterPast: Word('установилось', 7),
  pluralPast: Word('установились', 7),
  imperativeInformal: Word('установись', 7),
  imperativeFormal: Word('установитесь', 7),
  imperfect: [],
};

perfectVerbs.set(установиться.name.text, установиться);

export { установиться };