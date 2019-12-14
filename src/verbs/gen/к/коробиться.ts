import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коробиться: PerfectVerb = {
  name: Word('коробиться', 3),
  singular1stPerson: Word('короблюсь', 3),
  singular2ndPerson: Word('коробишься', 3),
  singular3rdPerson: Word('коробится', 3),
  plural1stPerson: Word('коробимся', 3),
  plural2ndPerson: Word('коробитесь', 3),
  plural3rdPerson: Word('коробятся', 3),
  masculinePast: Word('коробился', 3),
  femininePast: Word('коробилась', 3),
  neuterPast: Word('коробилось', 3),
  pluralPast: Word('коробились', 3),
  imperativeInformal: Word('коробься', 3),
  imperativeFormal: Word('коробьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(коробиться.name.text, коробиться);

export { коробиться };