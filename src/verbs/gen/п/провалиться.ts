import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провалиться: PerfectVerb = {
  name: Word('провалиться', 6),
  singular1stPerson: Word('провалюсь', 6),
  singular2ndPerson: Word('провалишься', 4),
  singular3rdPerson: Word('провалится', 4),
  plural1stPerson: Word('провалимся', 4),
  plural2ndPerson: Word('провалитесь', 4),
  plural3rdPerson: Word('провалятся', 4),
  masculinePast: Word('провалился', 6),
  femininePast: Word('провалилась', 6),
  neuterPast: Word('провалилось', 6),
  pluralPast: Word('провалились', 6),
  imperativeInformal: Word('провались', 6),
  imperativeFormal: Word('провалитесь', 6),
  imperfect: [],
};

perfectVerbs.set(провалиться.name.text, провалиться);

export { провалиться };