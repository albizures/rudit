import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const померещиться: PerfectVerb = {
  name: Word('померещиться', 5),
  singular1stPerson: Word('померещусь', 5),
  singular2ndPerson: Word('померещишься', 5),
  singular3rdPerson: Word('померещится', 5),
  plural1stPerson: Word('померещимся', 5),
  plural2ndPerson: Word('померещитесь', 5),
  plural3rdPerson: Word('померещатся', 5),
  masculinePast: Word('померещился', 5),
  femininePast: Word('померещилась', 5),
  neuterPast: Word('померещилось', 5),
  pluralPast: Word('померещились', 5),
  imperativeInformal: Word('померещись', 5),
  imperativeFormal: Word('померещитесь', 5),
  imperfect: [],
};

perfectVerbs.set(померещиться.name.text, померещиться);

export { померещиться };