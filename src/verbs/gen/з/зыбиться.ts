import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зыбиться: PerfectVerb = {
  name: Word('зыбиться', 1),
  singular1stPerson: Word('зыблюсь', 1),
  singular2ndPerson: Word('зыблешься', 1),
  singular3rdPerson: Word('зыблется', 1),
  plural1stPerson: Word('зыблемся', 1),
  plural2ndPerson: Word('зыблетесь', 1),
  plural3rdPerson: Word('зыблются', 1),
  masculinePast: Word('зыбился', 1),
  femininePast: Word('зыбилась', 1),
  neuterPast: Word('зыбилось', 1),
  pluralPast: Word('зыбились', 1),
  imperativeInformal: Word('зыблись', 1),
  imperativeFormal: Word('зыблитесь', 1),
  imperfect: [],
};

perfectVerbs.set(зыбиться.name.text, зыбиться);

export { зыбиться };