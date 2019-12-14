import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const струиться: PerfectVerb = {
  name: Word('струиться', 4),
  singular1stPerson: Word('струюсь', 4),
  singular2ndPerson: Word('струишься', 4),
  singular3rdPerson: Word('струится', 4),
  plural1stPerson: Word('струимся', 4),
  plural2ndPerson: Word('струитесь', 4),
  plural3rdPerson: Word('струятся', 4),
  masculinePast: Word('струился', 4),
  femininePast: Word('струилась', 4),
  neuterPast: Word('струилось', 4),
  pluralPast: Word('струились', 4),
  imperativeInformal: Word('струись', 4),
  imperativeFormal: Word('струитесь', 4),
  imperfect: [],
};

perfectVerbs.set(струиться.name.text, струиться);

export { струиться };