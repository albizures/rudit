import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мерещиться: PerfectVerb = {
  name: Word('мерещиться', 3),
  singular1stPerson: Word('мерещусь', 3),
  singular2ndPerson: Word('мерещишься', 3),
  singular3rdPerson: Word('мерещится', 3),
  plural1stPerson: Word('мерещимся', 3),
  plural2ndPerson: Word('мерещитесь', 3),
  plural3rdPerson: Word('мерещатся', 3),
  masculinePast: Word('мерещился', 3),
  femininePast: Word('мерещилась', 3),
  neuterPast: Word('мерещилось', 3),
  pluralPast: Word('мерещились', 3),
  imperativeInformal: Word('мерещись', 3),
  imperativeFormal: Word('мерещитесь', 3),
  imperfect: [],
};

perfectVerbs.set(мерещиться.name.text, мерещиться);

export { мерещиться };